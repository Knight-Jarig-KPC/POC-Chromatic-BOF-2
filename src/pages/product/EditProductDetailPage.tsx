import React, { useState, useEffect } from 'react'
import { Box, Button, CircularProgress } from "@mui/material"
import { styled } from "@mui/system"
import { useForm, useFieldArray, Controller } from 'react-hook-form'
import DeleteIcon from '@mui/icons-material/Delete'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from 'react-query'
import graphqlClient from 'graphqlClient'
import { GraphQLError } from "graphql"
import { uploadProductImage } from 'api/product'
import {
    GetProductQueryVariables,
    GetProductQuery,
    ProductInput
} from 'graphql-generated'

type ProductImgFromApiType = {
    baseUri: string | undefined,
    filename: string,
    hash: string,
    version: string,
    prefix?: string,
}

type EditProductDetailFormType = {
    productNameEN: string,
    productNameTH: string,
    productNameCN: string,
    productImgs: ProductImgFromApiType[],
}

type ProductImgPreviewsType = {
    [key: string]: ProductImgFromApiType
}

export type UseUplaodProductImageType = {
    imgFile: FileList,
}

const uploadProductImgGraphQL = () => `
    mutation {
        uploadImage {
            baseUri
            hash
            filename:fileName
            prefix
            version
        }
    }
`

const useQueryProductDetail = ({ sku }: GetProductQueryVariables) =>
    useQuery<GetProductQuery, GraphQLError>('getProduct', async () => (
        await graphqlClient.getProduct({ sku })
    ))

const useMutationUploadProductImage = () =>
    useMutation('uploadProductImage',
        ({ imgFile }: UseUplaodProductImageType) => {
            const formData = new FormData()
            formData.append('file', imgFile[0])
            formData.append('query', uploadProductImgGraphQL())
            return uploadProductImage(formData)
        })

const useMutationUpdateProductDetail = () =>
    useMutation('UpdateProductDocument',
        (inputFromAction: ProductInput) => (graphqlClient.updateProduct({ inputFromAction })))

export const EditProductDetailPage = () => {
    const { sku } = useParams()
    const { data: productDetail, isLoading: isLoadingProductDetail } = useQueryProductDetail({ sku: sku || '' })
    const { mutateAsync: uploadProductImg, isLoading: isUploadingProductImg } = useMutationUploadProductImage()
    const { mutate: updateProductDetail, isLoading: isUpdatingProductDoc } = useMutationUpdateProductDetail()
    const [productImgPreviews, setProductImgPreviews] = useState<ProductImgPreviewsType>({})
    const [firstRender, setFirstRender] = useState<boolean>(true)
    const { handleSubmit, control, setValue } = useForm<EditProductDetailFormType>({
        defaultValues: {
            productImgs: [],
        },
    })
    const { fields, append, remove } = useFieldArray({
        name: 'productImgs',
        control,
    })
    const submit = handleSubmit((data) => {
        const { productNameEN, productNameTH, productNameCN, productImgs } = data
        const mockingProductDetail = productDetail?.productNode as any
        const name = {
            en: productNameEN,
            th: productNameTH,
            cn: productNameCN,
        }
        const images = productImgs.map((image: ProductImgFromApiType) => ({ hash: image.hash }))
        const inputFromAction = {
            attributes: [
                { name: 'dimension', value: "" },
                { name: 'weight', value: "" },
                { name: 'manufacturing', value: "Thailand" },
            ],
            content: {
                ingredient: mockingProductDetail?.ingredients,
                longDescription: mockingProductDetail?.longDescription,
                material: mockingProductDetail?.materials,
                name,
                shortDescription: mockingProductDetail?.shortDescription,
                warranty: mockingProductDetail?.warranty
            },
            images,
            sap: {
                supplierCode: mockingProductDetail?.supplierCode
            },
            sku: mockingProductDetail?.sku,
            videos: mockingProductDetail?.videos
        } as ProductInput
        updateProductDetail(inputFromAction)
    })
    const imgUrlGenerator = (imgObj: ProductImgPreviewsType, key: string) => {
        const imgFile = imgObj?.[`${key}`] as any
        return `${imgObj?.[`${key}`]?.baseUri}/w_330/${imgFile?.version}/${imgFile?.filename}`
    }

    useEffect(() => {
        if (!isLoadingProductDetail) {
            const { name, images } = productDetail?.productNode as any
            setValue('productNameEN', name?.en)
            setValue('productNameTH', name?.th)
            setValue('productNameCN', name?.cn)
            setValue('productImgs', images)
        }
    }, [isLoadingProductDetail, productDetail?.productNode, setValue])

    useEffect(() => {
        if (firstRender && fields.length !== 0) {
            const { images } = productDetail?.productNode as any
            fields.forEach(({ id }, index) => (
                setProductImgPreviews(
                    (prevProductImgPreviews) => ({
                        ...prevProductImgPreviews,
                        [id]: images[index]
                    })
                )
            ))
            setFirstRender(false)
        }
    }, [fields, firstRender, productDetail?.productNode])

    return (
        <>
            {
                isLoadingProductDetail || isUpdatingProductDoc ?
                    <Box component='div'
                        sx={{
                            position: 'relative',
                            top: '250px',
                            left: '450px'
                        }}
                    >
                        <CircularProgress disableShrink />
                    </Box> :
                    <Box component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onSubmit={submit}
                    >
                        <h1>Edit Product</h1>
                        <ContainerStyle>
                            <h3>Product Info</h3>
                            <h4>Product Name</h4>
                            <Controller
                                name='productNameEN'
                                control={control}
                                render={({ field }) => (
                                    <TextBoxStyle>
                                        <label>ENGLISH</label>
                                        <input
                                            type='text'
                                            value={field.value}
                                            onChange={(event) => (
                                                field.onChange(event.target.value)
                                            )}
                                        />
                                    </TextBoxStyle>
                                )}
                            />
                            <Controller
                                name='productNameTH'
                                control={control}
                                render={({ field }) => (
                                    <TextBoxStyle>
                                        <label>THAI</label>
                                        <input
                                            type='text'
                                            value={field.value}
                                            onChange={(event) => (
                                                field.onChange(event.target.value)
                                            )}
                                        />
                                    </TextBoxStyle>
                                )}
                            />
                            <Controller
                                name='productNameCN'
                                control={control}
                                render={({ field }) => (
                                    <TextBoxStyle>
                                        <label>CHINESE</label>
                                        <input
                                            type='text'
                                            value={field.value}
                                            onChange={(event) => (
                                                field.onChange(event.target.value)
                                            )}
                                        />
                                    </TextBoxStyle>
                                )}
                            />
                        </ContainerStyle>
                        <ContainerStyle>
                            <h3>Image</h3>
                            <Box component='div'
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    marginTop: '10px',
                                }}
                            >
                                {fields.map((controlField, index) => (
                                    <Controller
                                        key={controlField.id}
                                        name={`productImgs.${index}`}
                                        control={control}
                                        render={({ field }) => {
                                            return (
                                                <ImgContainerStyle>
                                                    <input
                                                        type='file'
                                                        accept='image/*'
                                                        onChange={async (event) => {
                                                            const files = event.target.files as FileList
                                                            const { data } = await uploadProductImg({ imgFile: files })
                                                            field.onChange(data.uploadImage)
                                                            setProductImgPreviews(
                                                                (prevProductImgPreviews) => ({
                                                                    ...prevProductImgPreviews,
                                                                    [controlField.id]: data.uploadImage
                                                                })
                                                            )
                                                        }}
                                                    />
                                                    <span
                                                        onClick={() => {
                                                            remove(index)
                                                            setProductImgPreviews(() => {
                                                                const cloneProductImgPreviews = { ...productImgPreviews }
                                                                delete cloneProductImgPreviews?.[`${controlField.id}`]
                                                                return cloneProductImgPreviews
                                                            })
                                                        }}
                                                    >
                                                        <DeleteIcon />
                                                    </span>
                                                    {!isUploadingProductImg ?
                                                        <img
                                                            alt='Product'
                                                            src={imgUrlGenerator(productImgPreviews, controlField.id)}
                                                        /> :
                                                        <Box component="h3"
                                                            sx={{ marginLeft: '10px' }}
                                                        >
                                                            Uploading Product Image..
                                                        </Box>
                                                    }
                                                </ImgContainerStyle>
                                            )
                                        }}
                                    />
                                ))}
                                <Box component='div'
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid rgb(204, 204, 204)',
                                        width: '32%',
                                        height: '450px',
                                        marginRight: '10px',
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        color="info"
                                        onClick={() => append({ baseUri: undefined })}
                                    >
                                        Add New
                                    </Button>
                                </Box>
                            </Box>
                        </ContainerStyle>
                        <Button sx={{
                            width: "340px",
                            height: "40px",
                            margin: '30px 20px 20px auto',
                        }} variant="contained" color="info" type="submit">
                            Submit
                        </Button>
                    </Box >
            }
        </>
    )
}

const ContainerStyle = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginRight: '25px',
    'h3': {
        paddingBottom: '15px',
        marginBottom: '0',
        borderBottom: '1px solid #33333387',
    }
})

const TextBoxStyle = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
    'input': {
        width: '75%',
        height: '25px',
        margin: '10px 0 10px 0'
    },
})

const ImgContainerStyle = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    border: '1px solid rgb(204, 204, 204)',
    width: '32%',
    height: '450px',
    marginRight: '10px',
    'input': {
        marginLeft: '20px',
        marginTop: '10px',
        width: '50%',
    },
    'img': {
        marginLeft: '20px',
        width: '93%',
        height: '400px',
    },
    'span': {
        width: '44%',
        'svg': {
            position: 'relative',
            top: '7px',
            left: '135px',
        },
    },
})