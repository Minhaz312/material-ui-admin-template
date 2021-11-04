import { ExpandMore, Search, Send } from '@mui/icons-material'
import { styled, alpha } from '@mui/material/styles'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  InputBase,
  useMediaQuery,
  Divider,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { Card } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const SearchBox = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}))

export default function Chat() {
  const matches = useMediaQuery('(max-width:770px)')
  return (
    // <Grid item lg={12} md={12} sm={12} xs={12} sx={{ p: 0 }}>
    <Card sx={{ width: '100%', height: '90vh', bgcolor: '#fff' }} elevation={3}>
      <Grid container spacing={0}>
        <Grid
          lg={3}
          md={3}
          sm={12}
          xs={12}
          sx={{
            borderRight: '1px solid grey',
            height: '90vh',
            overflowY: 'auto',
          }}
        >
          {matches === true ? (
            <>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography>User list</Typography>
                  <SearchBox>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                      placeholder="Search…"
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </SearchBox>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                    <ListItem button divider={true}>
                      <Avatar sx={{ mr: 1 }}>UD</Avatar>
                      <ListItemText>username</ListItemText>
                    </ListItem>
                  </List>
                </AccordionDetails>
              </Accordion>
              <Box sx={{ height: '480px', overflowY: 'auto' }}>
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
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      maxWidth: '80%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      maxWidth: '80%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      maxWidth: '80%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      maxWidth: '80%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      maxWidth: '80%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                  <ListItem
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      maxWidth: '80%',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
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
                        this is message this is message this is message this is
                        message this is message vthis is message this is message
                        vthis is message vthis is message this is message this
                        is message this is message this is message
                      </ListItemText>
                      <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                        Me
                      </Avatar>
                    </Box>
                  </ListItem>
                </List>
              </Box>
              <Box sx={{ display: 'flex', heigth: '65px' }}>
                <TextField
                  type="text"
                  sx={{ width: '90%' }}
                  placeholder="Write message..."
                />
                <Button
                  variant="contained"
                  sx={{ width: '10%' }}
                  endIcon={<Send />}
                />
              </Box>
            </>
          ) : (
            <>
              <SearchBox>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </SearchBox>
              <Divider />
              <List>
                <ListItem button divider={true}>
                  <Avatar sx={{ mr: 1 }}>UD</Avatar>
                  <ListItemText>username</ListItemText>
                </ListItem>
                <ListItem button divider={true}>
                  <Avatar sx={{ mr: 1 }}>UD</Avatar>
                  <ListItemText>username</ListItemText>
                </ListItem>
              </List>
            </>
          )}
        </Grid>
        <Grid lg={9} md={9} sm={12} xs={12}>
          <Box sx={{ height: '80vh', overflowY: 'auto' }}>
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
                  <Avatar sx={{ mr: 1, height: '30px', width: '30px' }}>
                    Me
                  </Avatar>
                  <ListItemText
                    sx={{
                      bgcolor: '#BEC3C9',
                      color: '#000',
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
                    this is message this is message this is message this is
                    message this is message vthis is message this is message
                    vthis is message vthis is message this is message this is
                    message this is message this is message
                  </ListItemText>
                  <Avatar sx={{ ml: 1, height: '30px', width: '30px' }}>
                    Me
                  </Avatar>
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
            <Button
              variant="contained"
              sx={{ width: '10%' }}
              endIcon={<Send />}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
    // </Grid>
  )
}
