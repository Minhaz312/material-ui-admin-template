import React, { lazy, Suspense } from 'react'
import {
  Card,
  CircularProgress,
  Divider,
  Grid,
  Typography,
} from '@mui/material'
import BuyCoin from '../components/Home/BuyCoin'
import BuyerWaiting from '../components/Home/BuyerWaiting'
import Chat from '../components/Home/Chat'
import Summery from '../components/Home/Summery'
import TransactionList from '../components/transaction/TransactionList'
const Layout = lazy(() => import('../components/common/Layout'))

export default function Home() {
  return (
    <Suspense fallback={<CircularProgress color="primary" />}>
      <Layout>
        <Summery />
        <Divider sx={{ my: 2 }} />
        <Grid container spacing={2}>
          {/* <Chat /> */}
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Card
              sx={{
                width: '100%',
                height: '600px',
                bgcolor: '#fff',
                overflowY: 'auto',
              }}
              elevation={3}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: 'center',
                  borderBottom: '1px solid #EBEBEB',
                  p: 1,
                  m: 1,
                  bgcolor: '#EBEBEB',
                }}
              >
                Waiting
              </Typography>
              {/* <Grid item lg={8} md={12} sm={12} xs={12} sx={{ p: 0 }}> */}
              <BuyerWaiting />
              {/* </Grid> */}
            </Card>
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ p: 0 }}>
            <BuyCoin />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12} sx={{ p: 0 }}>
            <TransactionList />
          </Grid>
        </Grid>
      </Layout>
    </Suspense>
  )
}
