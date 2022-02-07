import React from 'react';
import AddProductAndGWPPanel from 'components/product/AddProductAndGWPPanel';
import Tabs from 'components/common/Tabs';
import { styled, Box } from "@mui/system";
import { useMutation } from 'react-query';
import { createProductByFile } from '../../api/product';
import { useForm } from 'react-hook-form';

export interface UseAddProductAndGWFormType {
  attachment: FileList,
}

interface useMutationAddProductAndGWPType {
  file: UseAddProductAndGWFormType,
  name: string
}

const importProductFile = () => `
  mutation {
    createProductByFile {
      taskId
    }
  }
`

const importGWPFile = () => `
  mutation {
    createGwpByFile {
      taskId
    }
  }
`

const useMutationAddProductAndGWP = () =>
  useMutation(
    'createProductByFile',
    ({ file, name }: useMutationAddProductAndGWPType) => {
      const formData = new FormData()
      formData.append('file', file.attachment[0])
      formData.append('query', name === 'product' ? importProductFile() : importGWPFile())
      return createProductByFile(formData)
    },
    { retry: 3 }
  )

export const ImportProductDetailPage = (): JSX.Element => {
  const { mutate } = useMutationAddProductAndGWP()
  const { handleSubmit, control } = useForm<UseAddProductAndGWFormType>()
  const submitProduct = handleSubmit((file: UseAddProductAndGWFormType) => mutate({ file, name: 'product' }));
  const submitGWP = handleSubmit((file: UseAddProductAndGWFormType) => mutate({ file, name: 'GWP' }));
  return (
    <Box component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: "0 15px 0 10px",
      }}
    >
      <Title>Add Product/GWP by File</Title>
      <Tabs menu={['Product', 'GWP']} JSXList={[
        <AddProductAndGWPPanel
          name={"product"}
          title={"Add Product : Parent, Child, Normal"}
          submit={submitProduct}
          control={control} />,
        <AddProductAndGWPPanel
          name={"GWP"}
          title={"Add Product : GWP"}
          submit={submitGWP}
          control={control} />
      ]} />
    </Box>

  )
}

const Title = styled("h1")({
  textAlign: "left",
});