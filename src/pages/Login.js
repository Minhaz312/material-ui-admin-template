import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useHistory } from 'react-router'
export default function Login() {
  const router = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    if (email === '' || password === '') {
      alert('Enter email and password')
    } else {
      sessionStorage.setItem('email', email)
      sessionStorage.setItem('password', password)
      router.push('/home')
    }
  }
  useEffect(() => {
    if (sessionStorage.getItem('email')) {
      router.push('/home')
    }
  }, [])
  return (
    <Box
      sx={{
        m: 0,
        height: '100vh',
        bgcolor: '#BEBEBE',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CssBaseline />
      <Card
        sx={{ bgcolor: '#fff', p: 3, height: '400px', width: '400px' }}
        elevation={3}
      >
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <Divider sx={{ my: 2 }} />
        <TextField
          type="text"
          sx={{ my: 1 }}
          fullWidth
          label="Enter Email"
          variant="standard"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          variant="standard"
          label="Password"
          fullWidth
          sx={{ my: 1 }}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ my: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Card>
    </Box>
  )
}
