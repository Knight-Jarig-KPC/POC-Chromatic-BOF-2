import { Box, Button, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { format, fromUnixTime } from 'date-fns'
import { ContentEnumType, ContentsQuery, ContentsResponse, StaticPages } from 'graphql-generated'
import graphqlClient from 'graphqlClient'
import Table from 'pages/poc/Table'
import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import { Column } from 'react-table'

type Row = {
    id: string
    titleName: string
    url: string
    author: string
    updatedDate: string
    status: string
}
type Rows = Array<Row>

const createRowData = (contentData: Array<StaticPages>): Rows => {
    return contentData.map((item) => {
        const { id,titleName, url, author, updatedDate, status} = item
        const formatUpdatedDate = format(fromUnixTime(updatedDate ?? 0), 'dd MMM yyyy')

        return {
            id: id ?? '',
            titleName: titleName ?? '',
            url: url ?? '',
            author: author ?? '',
            updatedDate: formatUpdatedDate,
            status: status ?? '',
        }
    })
}

// const columns: GridColDef[] = [
//     { field: 'titleName', headerName: 'Title Name', width: 350 },
//     { field: 'url', headerName: 'URL', width: 200 },
//     { field: 'author', headerName: 'Author', width: 130 },
//     { field: 'updatedDate', headerName: 'Update Date', width: 130 },
//     { field: 'status', headerName: 'Status', width: 70 }
//   ];

type Columns = Array<Column<Row>>

const columns: Columns = [
    {
      Header: 'TitleName',
      accessor: 'titleName',
      sticky: 'left',
    },
    {
      Header: 'URL',
      accessor: 'url',
    },
    {
      Header: 'Author',
      accessor: 'author',
    },
    {
      Header: 'Update Date',
      accessor: 'updatedDate',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
  ]

const pageSize = 20

const fetchPageList = async (page: number): Promise<ContentsQuery> => {
    return await graphqlClient.contents({page: page+1, limit: pageSize, contentType: ContentEnumType.Staticpage})
}

const StaticPageListPage = (): JSX.Element => {
    const [page, setPage] = useState(0)
    const {data, isFetching} = useQuery(['staticPage', page], () => fetchPageList(page), { keepPreviousData: true })

    const rows = useMemo(() => {
        if(!data) return [] as Rows

        const { contents } = data as ContentsQuery
        const { data: contentData } = contents as ContentsResponse
        return createRowData(contentData as Array<StaticPages>);
    }, [data])

    const totalCount = useMemo(() => {
        if(!data || !data.contents) return 0

        return data.contents.totalCount ?? 0
    }, [data])

    const handlePageChange = (page: number): void => {
        setPage(page)
    }

    return (
        <> 
            <Box 
                sx={{
                        display: 'flex',
                        justifyContent:'space-between',
                    }} 
                p={2}
            >
                <Box>
                  <Typography variant="h4">Page</Typography>  
                </Box>
                <Box>
                    <Button variant="contained">Add new Page</Button>
                </Box>
            </Box>

            <Box sx={{height: '600px', width: '100%'}}>
                {/*<DataGrid
                    loading={isFetching}
                    rows={rows}
                    columns={columns}
                    page={page}
                    pageSize={pageSize}
                    checkboxSelection
                    rowCount={totalCount}
                    onPageChange={handlePageChange}
                    paginationMode='server'
                /> */}
                <Table columns={columns} data={rows} page={page} rowPerPage={10} totalCount={totalCount} onPageChange={handlePageChange}/>
            </Box>
        </>
       
    )
}

export default StaticPageListPage
