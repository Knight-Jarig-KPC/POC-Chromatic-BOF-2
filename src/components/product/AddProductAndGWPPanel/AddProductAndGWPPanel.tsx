import React, { FormEventHandler, useState } from "react";
import { Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { Control, Controller } from 'react-hook-form';
import { UseAddProductAndGWFormType } from "../../../pages/product/ImportProductDetailPage";

interface AddProductAndGWPPanelType {
    title: string,
    name: string,
    submit: FormEventHandler<HTMLFormElement>,
    control: Control<UseAddProductAndGWFormType>
}

const AddProductAndGWPPanel = ({ title, name, submit, control }: AddProductAndGWPPanelType): JSX.Element => {
    const [filePath, setFilePath] = useState("");
    return (
        <Box component='div' sx={{
            display: "grid",
            gridTemplateRows: "repeat(2, 1fr)",
            gridColumnGap: "5px",
            width: "97%",
            background: "rgb(249, 252, 255)",
            border: "1px solid rgb(193, 217, 233)",
            padding: "0 15px 0 15px",
        }}>
            <Title>{title}</Title>
            <Description>
                <Box sx={{
                    marginBottom: "7px"
                }}>1. Browse File</Box>
                <Box>
                    {`Upload the ${name} file for add products. File size must not exceed 2 MB. Support *.CSV file format.`}
                </Box>
            </Description>
            <AddProductAndGWPForm onSubmit={submit}>
                <Button
                    variant="outlined"
                    color="info"
                    component="label"
                    sx={{
                        marginBottom: "10px",
                        width: "400px"
                    }}
                >
                    <Path>{filePath === "" ? "Upload File" : `Image was uploaded: ${filePath}`}</Path>
                    <Controller
                        name='attachment'
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field }) => (
                            <input
                                type="file"
                                hidden
                                accept=".csv"
                                onChange={(event) => {
                                    field.onChange(event.target.files)
                                    setFilePath(event.target.value)
                                }}
                            />
                        )}
                    />
                </Button>
                <Button sx={{
                    width: "340px",
                    height: "40px",
                    justifySelf: 'right'
                }} variant="contained" color="info" type="submit" disabled={filePath === ""}>
                    Submit
                </Button>
            </AddProductAndGWPForm>
        </Box>

    )
}

const Title = styled('h2')({
    justifySelf: 'left',
})

const Description = styled('p')({
    justifySelf: 'left',
    textAlign: 'left',
})

const AddProductAndGWPForm = styled('form')({
    width: "100%",
    justifySelf: 'left',
    marginBottom: "15px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
})

const Path = styled('div')({
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    width: "400px",
    textAlign: "center",
})

export default AddProductAndGWPPanel;