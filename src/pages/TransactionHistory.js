import React from 'react'
import Layout from '../components/common/Layout'
import { Card } from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid'

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export default function TransactionHistory() {
  const columns = [
    { field: 'coin', headerName: 'Total Coin' },
    { field: 'price', headerName: 'Price' },
    { field: 'gateway', headerName: 'Gateway', width: 200 },
    { field: 'status', headerName: 'Status' },
  ]

  const rows = [
    {
      id: 1,
      coin: 123,
      price: 2000,
      gateway: 'SSLCommerze',
      status: 'Success',
    },
    {
      id: 2,
      coin: 123,
      price: 2000,
      gateway: 'SSLCommerze',
      status: 'Success',
    },
    {
      id: 3,
      coin: 123,
      price: 2000,
      gateway: 'SSLCommerze',
      status: 'Success',
    },
    {
      id: 4,
      coin: 123,
      price: 2000,
      gateway: 'SSLCommerze',
      status: 'Success',
    },
    {
      id: 5,
      coin: 123,
      price: 2000,
      gateway: 'SSLCommerze',
      status: 'Success',
    },
  ]

  return (
    <Layout>
      <Card
        sx={{ bgcolor: '#fff', height: '600px', width: '500px' }}
        elevation={3}
      >
        <DataGrid
          columns={columns}
          rows={rows}
          components={{
            Toolbar: CustomToolbar,
          }}
        />
      </Card>
    </Layout>
  )
}
