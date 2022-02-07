import React, { useEffect } from 'react'
import { Box, Button } from "@mui/material"
import { styled } from "@mui/system"
import { useForm, Controller } from 'react-hook-form'
import { useMutation } from 'react-query'
import download from 'downloadjs'
import { format } from 'date-fns'

import {
    downloadProductFileBySKUs,
    downloadProductFileByBatch,
    downloadProductFileByBatchRange,
} from "../../api/product"

interface ExportProductDetailFormType {
    method: string,
    exportType?: string,
    SKUs?: string,
    singleProductBatch?: string,
    rangeProductBatch?: {
        maxBatch: string,
        minBatch: string,
    }
}

const initExportProductDetailForm = {
    method: 'bySKU',
    exportType: undefined,
    SKUs: undefined,
    singleProductBatch: undefined,
    rangeProductBatch: undefined,
}

const useMutationExportProductDetail = () =>
    useMutation('downloadProductDetail',
        (data: ExportProductDetailFormType) => {
            const { method, exportType, SKUs, singleProductBatch, rangeProductBatch } = data
            if (method === "bySKU") {
                const skuStr = SKUs as string
                return downloadProductFileBySKUs({ skus: skuStr.split(',') })
            } else if (exportType === "singleBatch") {
                return downloadProductFileByBatch({ batchFilter: singleProductBatch })
            } else {
                return downloadProductFileByBatchRange({
                    batchMax: rangeProductBatch?.maxBatch,
                    batchMin: rangeProductBatch?.minBatch,
                })
            }
        }
    )

export const ExportProductDetailPage = () => {
    const { handleSubmit, control, watch, setValue, formState } = useForm<ExportProductDetailFormType>({
        defaultValues: initExportProductDetailForm
    })
    const { mutate, data: exportFile, isSuccess, isError, error: axiosError } = useMutationExportProductDetail()
    const submit = handleSubmit((data) => mutate(data))
    const watchAllFields = watch()
    const clearTextBox = () => {
        setValue('SKUs', undefined)
        setValue('singleProductBatch', undefined)
        setValue('rangeProductBatch', undefined)
    }
    const onDisableSubmit = () => {
        const { method, exportType, SKUs, singleProductBatch, rangeProductBatch } = watchAllFields
        return (method === "bySKU" && SKUs !== undefined && SKUs !== '') ||
            (exportType === "singleBatch" && singleProductBatch !== undefined && singleProductBatch !== '') ||
            (exportType === "range" && rangeProductBatch !== undefined &&
                (rangeProductBatch.minBatch !== '' && rangeProductBatch.maxBatch !== '') &&
                (rangeProductBatch.minBatch !== undefined && rangeProductBatch.maxBatch !== undefined))
    }

    useEffect(() => {
        if (isSuccess) download(exportFile, `export-product-information-${format(new Date(), 'YYYY-MM-DD-HH-mm')}.csv`)
    }, [exportFile, isSuccess])

    const ErrorMessage = (): JSX.Element => {
        const errorObj = axiosError as any
        return (
            <Box component="span"
                sx={{
                    color: 'red',
                    margin: '0 30px 10px auto'
                }}>
                {`Error! : ${errorObj.response.data.message}`}
            </Box>
        )
    }

    return (
        <Box component="div"
            sx={{
                display: "flex",
                flexDirection: "column",
                margin: "0 15px 0 10px",
            }}
        >
            <Title>Export Product detail to CSV</Title>
            <Box component='form' onSubmit={submit}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: "rgb(249, 252, 255)",
                    border: "1px solid rgb(193, 217, 233)",
                }}
            >
                <Box component="div"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.5fr",
                        gridColumnGap: "5px",
                        width: "97%",
                        padding: "0 15px 0 15px",
                    }}
                >
                    <InputContainer leftComponent={true}>
                        <Controller
                            name="method"
                            control={control}
                            render={({ field }) => (
                                <RadioBox>
                                    <div className='inputTitle'>1.Select Method</div>
                                    <div className='inputField'>
                                        <input
                                            type="radio"
                                            name="method"
                                            value="bySKU"
                                            checked={field.value === "bySKU"}
                                            onChange={(event) => {
                                                field.onChange(event.target.value)
                                                setValue('exportType', undefined)
                                                clearTextBox()
                                            }}
                                        />
                                        <label>By SKUs</label>
                                    </div>
                                    <div className='inputField'>
                                        <input
                                            type="radio"
                                            name="method"
                                            value="byProductBatchNo"
                                            onChange={(event) => {
                                                field.onChange(event.target.value)
                                                setValue('exportType', 'singleBatch')
                                                clearTextBox()
                                            }}
                                        />
                                        <label>By Product Batch No.</label>
                                    </div>
                                </RadioBox>
                            )}
                        />
                        {watchAllFields.method !== 'bySKU' &&
                            <Controller
                                name="exportType"
                                control={control}
                                render={({ field }) => (
                                    <RadioBox bottomComponent={true}>
                                        <div className='inputTitle'>2.Select type of export</div>
                                        <div className='inputField'>
                                            <input
                                                type="radio"
                                                name="exportType"
                                                value="singleBatch"
                                                checked={field.value === "singleBatch"}
                                                onChange={(event) => {
                                                    field.onChange(event.target.value)
                                                    clearTextBox()
                                                }}
                                            />
                                            <label>Single Batch</label>
                                        </div>
                                        <div className='inputField'>
                                            <input
                                                type="radio"
                                                name="exportType"
                                                value="range"
                                                onChange={(event) => {
                                                    field.onChange(event.target.value)
                                                    clearTextBox()
                                                }}
                                            />
                                            <label>Range</label>
                                        </div>
                                    </RadioBox>
                                )}
                            />
                        }
                    </InputContainer>
                    <InputContainer>
                        {watchAllFields.method === 'bySKU' ?
                            <Controller
                                name="SKUs"
                                control={control}
                                rules={{
                                    required: true
                                }}
                                render={({ field }) => (
                                    <TextBox>
                                        <label>2.Enter Only Product SKUs</label>
                                        <textarea
                                            rows={50} cols={100}
                                            onChange={(event) => (
                                                field.onChange(event.target.value)
                                            )}
                                        />
                                    </TextBox>
                                )}
                            /> :
                            watchAllFields.exportType === 'range' ?
                                <TextBox range={true}>
                                    <label>3.Enter Range Product Batch No.</label>
                                    <span>From</span>
                                    <Controller
                                        name="rangeProductBatch.minBatch"
                                        control={control}
                                        rules={{
                                            validate: {
                                                lessThanTen: (value: string) => parseInt(value) < parseInt(watchAllFields?.rangeProductBatch?.maxBatch || '0'),
                                            }
                                        }}
                                        render={({ field }) => (
                                            <input
                                                type="number"
                                                onChange={(event) => (
                                                    field.onChange(event.target.value)
                                                )}
                                            />
                                        )}
                                    />
                                    <span>To</span>
                                    <Controller
                                        name="rangeProductBatch.maxBatch"
                                        control={control}
                                        render={({ field }) => (
                                            <input
                                                type="number"
                                                onChange={(event) => (
                                                    field.onChange(event.target.value)
                                                )}
                                            />
                                        )}
                                    />
                                </TextBox>
                                :
                                <Controller
                                    name="singleProductBatch"
                                    control={control}
                                    rules={{
                                        required: true
                                    }}
                                    render={({ field }) => (
                                        <TextBox>
                                            <label>3.Enter Single Product Batch No.</label>
                                            <input
                                                type="text"
                                                onChange={(event) => (
                                                    field.onChange(event.target.value)
                                                )}
                                            />
                                        </TextBox>
                                    )}
                                />
                        }
                        {formState?.errors?.rangeProductBatch?.minBatch &&
                            <Box component="span"
                                sx={{
                                    color: 'red',
                                    marginLeft: '30px',
                                }}>
                                From value" must be less than or equal "To value.
                            </Box>
                        }

                    </InputContainer>
                </Box>
                {isError &&
                    <ErrorMessage />
                }
                <Button sx={{
                    width: "340px",
                    height: "40px",
                    margin: '0 20px 20px auto',
                }} variant="contained" color="info" type="submit" disabled={!onDisableSubmit()}>
                    Submit
                </Button>
            </Box>
        </Box >
    )
}

const Title = styled("h1")({
    textAlign: "left",
});

const InputContainer = styled("div", {
    shouldForwardProp: (prop) => prop !== "leftComponent"
})<{ leftComponent?: boolean }>(({ leftComponent }) => ({
    borderRight: leftComponent ? '1px solid rgb(231, 234, 236)' : '',
    margin: '20px 10px 20px 10px',
}))

const RadioBox = styled('div', {
    shouldForwardProp: (prop) => prop !== "bottomComponent"
})<{ bottomComponent?: boolean }>(({ bottomComponent }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: bottomComponent ? '10px' : '80px',
    '.inputTitle': {
        fontWeight: 'bold',
        width: '100%'
    },
    '.inputField': {
        width: '50%',
        marginTop: '10px'
    }
}))

const TextBox = styled('div', {
    shouldForwardProp: (prop) => prop !== "range"
})<{ range?: boolean }>(({ range }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    'label': {
        fontWeight: 'bold',
        width: '100%',
        marginBottom: '10px',
    },
    'input': {
        width: range ? '10%' : '250px',
        height: '30px',
        marginRight: range ? '10px' : '',
    },
    'textarea': {
        maxWidth: '650px',
        maxHeight: '100px',
    },
    'span': {
        marginRight: '10px'
    },
}))