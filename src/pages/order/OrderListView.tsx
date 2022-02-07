import React, { useState, ChangeEvent, useMemo } from 'react'
import {useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import Button from '@mui/material/Button'
import {
    DataGrid,
    GridColDef,
    useGridApiContext,
    useGridState,
    GridActionsCellItem,
    GridRowId,
    GridValueOptionsParams,
    GridActionsColDef,
    GridEnrichedColDef
} from '@mui/x-data-grid'
import {Pagination} from "@mui/material"
import graphqlClient from 'graphqlClient'

import { ClientError } from 'graphql-request'

import {OrdersResponse, Maybe, OrdersQuery} from 'graphql-generated'
import {GraphQLError} from "graphql"
import {stringify} from "querystring"

import { useAuth } from 'context/authentication'


interface TableData {
  id: string,
  orderId: string,
  customerName: string
  customerEmail: string
}

function createData(
  id: string,
  orderId: string,
  customerName: string,
  customerEmail: string
): TableData {
  return { id, orderId, customerName, customerEmail }
}



function CustomPagination() {
  const apiRef = useGridApiContext();

  return (
    <Pagination
      color="primary"
      count={apiRef.current.state.pagination.pageCount}
      page={apiRef.current.state.pagination.page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}

export default function OrderListView() {
      const [page, setPage] = useState(1)
      const [rowsPerPage, setRowsPerPage] = useState(100)
      const navigate = useNavigate()

       const queryClient = useQueryClient()


      //TODO: Move to external reusable function, when logic complexity happen?
      const { data, isFetching } = useQuery<OrdersQuery, GraphQLError>(['orders', page, rowsPerPage] , async () => {
           return await graphqlClient.orders({
               page: page + 1,
               recordsPerPage: rowsPerPage
           })
      }, {
             keepPreviousData: true,
             retry: false
          })

      //TODO: Move to external data transform function?
      const rows = useMemo(
      () => data?.orders?.data?.map((order: any, index: number) => createData(order.id, order.orderId, order?.customer?.firstName, order?.customer?.email)) || [],
      [data?.orders?.data]
    )

      const handleChangePage = (newPage: number) => {
        setPage(newPage)
      }

      const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
      }

      const columns: GridEnrichedColDef[] = [
          { field: 'orderId', headerName: 'Order ID', width: 400 },
          {
            field: 'customerName',
            headerName: 'First name',
            width: 150,
          },
          {
            field: 'customerEmail',
            headerName: 'Last name',
            width: 150,
          },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 80,
            getActions: (params) => {
                return [
                    <GridActionsCellItem
                        icon={<RemoveRedEyeIcon />}
                        label="View"
                        onClick={() => {
                            navigate(`/order/${params?.row?.orderId}`)
                        }}
                    />
                ]
            },
          },
        ]


      return (
       <>
          <Paper sx={{ padding: 2 }}>
           <Typography variant="h4" component="h4">
              Order
            </Typography>
          </Paper>
          <Box sx={{ height: '600px' }}>
            <DataGrid
                columns={columns}
                rows={rows}
                loading={isFetching}
                page={page}
                pageSize={rowsPerPage}
                rowCount={data?.orders?.totalCount || 0}
                onPageChange={handleChangePage}
                components={{
                  Pagination: CustomPagination,
                }}
                paginationMode="server"
                checkboxSelection
            />
          </Box>
        </>
  )
}
