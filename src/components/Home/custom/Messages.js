import { Send } from '@mui/icons-material'
import {
  Avatar,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Messages() {
  return (
    <Grid lg={9} md={12} sm={12} xs={12}>
      <Box sx={{ height: '530px', overflowY: 'auto' }}>
        <List>
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              maxWidth: '80%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>Me</Avatar>
              <ListItemText
                sx={{
                  bgcolor: '#1976d2',
                  color: '#fff',
                  p: 1,
                  borderRadius: 2,
                }}
              >
                this is message
              </ListItemText>
            </Box>
            <span></span>
          </ListItem>
          <ListItem
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}
          >
            <span></span>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                maxWidth: '80%',
              }}
            >
              <ListItemText
                sx={{
                  bgcolor: '#1976d2',
                  color: '#fff',
                  p: 1,
                  borderRadius: 2,
                }}
              >
                this is message this is message this is message this is message
                this is message vthis is message this is message vthis is
                message vthis is message this is message this is message this is
                message this is message
              </ListItemText>
              <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>Me</Avatar>
            </Box>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ display: 'flex', heigth: '70px' }}>
        <TextField
          type="text"
          sx={{ width: '90%' }}
          placeholder="Write message..."
        />
        <Button variant="contained" sx={{ width: '10%' }} endIcon={<Send />} />
      </Box>
    </Grid>
  )
}
