import {
  Button,
  Card,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material'
import React from 'react'
import Layout from '../components/common/Layout'

export default function BuyCoin() {
  const matches = useMediaQuery('(max-width:992px)')
  const handleSelectSeller = (e) => {}

  return (
    <Layout>
      <Card
        sx={{
          width: matches ? '95%' : '50%',
          mx: 'auto',
          p: 3,
          minHeight: '600px',
          bgcolor: '#fff',
        }}
        elevation={3}
      >
        <Typography variant="h3" sx={{ textAlign: 'center', my: 2 }}>
          Buy Coin
        </Typography>
        <Divider sx={{ my: 2 }} />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Seller</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleSelectSeller}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <FormHelperText>Select Seller</FormHelperText>
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <InputLabel id="demo-simple-select-label">Payment Gateway</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleSelectSeller}
          >
            <MenuItem value={10}>SSLCommerze</MenuItem>
            <MenuItem value={20}>Paypal</MenuItem>
            <MenuItem value={30}>Stripe</MenuItem>
          </Select>
          <FormHelperText>Select Payment Method</FormHelperText>
        </FormControl>
        <TextField
          fullWidth
          helperText="Enter Number of Coin"
          sx={{ my: 1 }}
          id="outlined-basic"
          label="Coin"
          placeholder="Enter Number of Coin"
          variant="outlined"
        />
        <Button variant="contained" color="primary" fullWidth sx={{ my: 2 }}>
          Buy
        </Button>
      </Card>
    </Layout>
  )
}
