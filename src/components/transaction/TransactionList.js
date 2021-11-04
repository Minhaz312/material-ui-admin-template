import React, { useState } from 'react'
import { Button, Card, IconButton, Menu, MenuItem } from '@mui/material'
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  gridClasses,
} from '@mui/x-data-grid'
import { Edit } from '@mui/icons-material'

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport />
    </GridToolbarContainer>
  )
}

export default function TransactionList() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const columns = [
    { field: 'coin', headerName: 'Total Coin' },
    { field: 'price', headerName: 'Price' },
    { field: 'gateway', headerName: 'Gateway', width: 200 },
    { field: 'status', headerName: 'Status' },
    {
      field: 'id',
      headerName: 'Action',
      renderCell: () => (
        <div>
          <IconButton
            id="basic-button"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleClick}
            color="primary"
          >
            <Edit />
          </IconButton>
          <Menu
            id="basic-button"
            anchorEl={anchorEl}
            open={open}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={handleClose}
            elevation={2}
          >
            <MenuItem>View</MenuItem>
            <MenuItem>Print</MenuItem>
            <MenuItem>Delete</MenuItem>
          </Menu>
        </div>
      ),
    },
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
    <Card
      sx={{ bgcolor: '#fff', height: '600px', width: '100%' }}
      elevation={3}
    >
      <DataGrid
        isRowSelectable={false}
        columns={columns}
        rows={rows}
        components={{
          Toolbar: CustomToolbar,
        }}
      />
    </Card>
  )
}
