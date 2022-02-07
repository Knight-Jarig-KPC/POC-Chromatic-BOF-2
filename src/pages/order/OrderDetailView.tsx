import React, { useState, ChangeEvent, useMemo, forwardRef } from 'react'
import { useQuery } from 'react-query'
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom'

import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Button, { ButtonProps } from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import PauseIcon from '@mui/icons-material/Pause'
import EditIcon from '@mui/icons-material/Edit'
import Divider from '@mui/material/Divider'

import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'

import graphqlClient from 'graphqlClient'



export default function OrderDetailView() {
      const { orderId } = useParams()

       //TODO: Move to external reusable function, when logic complexity happen?
      const { data, isLoading } = useQuery('order', async () => {
          return await graphqlClient.order({ orderId: orderId as string })
      })

      if (isLoading) {
          return <CircularProgress />
      }

      const order = data?.order

      //TODO: Move to external data transform function?
      const rows: any = order?.subOrders?.[0]?.items?.map((item: any) => ({
          sku: item?.sku,
          name: item?.productName,
          price: item?.unitPrice,
          quantity: item?.quantity,
          discount: item?.discountAmount,
          subtotal: item?.netAmount
      }))


      return (
           <Box>
              <Box sx={{ textAlign: 'left', padding: 2 }}>
               <Typography variant="h4" component="h4">
                  Order #{order?.orderId}
                </Typography>
              </Box>
              <Box>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      width: 'fit-content',
                      borderRadius: 1,
                      bgcolor: 'background.paper',
                      color: 'text.secondary',
                      '& svg': {
                        m: 1.5,
                      },
                      '& hr': {
                        mx: 0.5,
                      },
                      p: 2
                    }}
                  >
                    <Box sx={{ p: 1 , textAlign: 'left' }}>
                        <Typography variant="caption" >Customer Name</Typography>
                        <Typography variant="h6" >
                            {`${order?.customer?.firstName} ${order?.customer?.lastName}`}
                        </Typography>
                    </Box>
                    <Divider orientation="vertical"  flexItem />
                    <Box sx={{ p: 1, textAlign: 'left' }} >
                       <Typography variant="caption" >Customer Email</Typography>
                       <Typography variant="h6" >{order?.customer?.email}</Typography>
                    </Box>
                    <Divider orientation="vertical"  flexItem />
                    <Box sx={{ p: 1, textAlign: 'left' }} >
                       <Typography variant="caption" >Customer Email</Typography>
                       <Typography variant="h6" >{order?.customer?.email}</Typography>
                    </Box>
                    <Divider orientation="vertical"  flexItem />
                    <Box sx={{ p: 1, textAlign: 'left' }} >
                       <Typography variant="caption" >Order Status</Typography>
                       <Typography variant="h6" >{order?.orderStatus}</Typography>
                    </Box>
                    <Divider orientation="vertical"  flexItem />
                    <Box sx={{ p: 1, textAlign: 'left' }} >
                       <Typography variant="caption" >Company</Typography>
                       <Typography variant="h6" >{order?.company}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: 2, textAlign: 'left' }}>
                      <ButtonGroup size="small" variant="text" aria-label="small button group">
                        <Button component={RouterLink} to="/order/list">
                            <ArrowBackIosIcon/> Back
                        </Button>
                        <Button><PauseIcon/> Hold</Button>
                        <Button><EditIcon /> Edit</Button>
                      </ButtonGroup>
                  </Box>
                  <Box sx={{ p: 2, textAlign: 'left' }}>
                    <Typography variant="h5" sx={{ pt: 2, pb: 2 }} >Ordered Item</Typography>
                    <Paper sx={{ p: 1, display: 'inline-flex' }}>
                        <Typography variant="subtitle1" >{order?.subOrders?.[0]?.shippingMethod}</Typography>
                    </Paper>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>SKU</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Quantity</TableCell>
                            <TableCell>Discount</TableCell>
                            <TableCell>Subtotal</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row: any) => (
                            <TableRow
                              key={row.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {row.sku}
                              </TableCell>
                              <TableCell>{row.name}</TableCell>
                              <TableCell>{row.price}</TableCell>
                              <TableCell>{row.quantity}</TableCell>
                              <TableCell>{row.discount}</TableCell>
                              <TableCell>{row.subtotal}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Box>
              </Box>
            </Box>
  )
}
