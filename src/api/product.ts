import axiosInstance from "axiosClient";

interface downloadProductFileBySKUsVariables {
    skus: string[]
}

interface downloadProductFileByBatchVariables {
    batchFilter: string | undefined
}

interface downloadProductFileByBatchRangeVariables {
    batchMax: string | undefined,
    batchMin: string | undefined,
}

export const createProductByFile = (attachFile: FormData) =>
    axiosInstance.post("/", attachFile).then(({ data }) => data)

export const downloadProductFileBySKUs = ({ skus }: downloadProductFileBySKUsVariables) =>
    axiosInstance.post("/v2/files/product/productsnode/", { skus }).then(({ data }) => data)

export const downloadProductFileByBatch = ({ batchFilter }: downloadProductFileByBatchVariables) =>
    axiosInstance.post("/v2/files/product/productsnode/", { batchFilter }).then(({ data }) => data)

export const downloadProductFileByBatchRange = ({ batchMax, batchMin }: downloadProductFileByBatchRangeVariables) =>
    axiosInstance.post("/v2/files/product/productsnode/", { batchMax, batchMin }).then(({ data }) => data)

export const uploadProductImage = (attachFile: FormData) =>
    axiosInstance.post("/", attachFile).then(({ data }) => data)