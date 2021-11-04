import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { ExpandMore } from '@mui/icons-material'

export default function ClientList() {
  const matches = useMediaQuery('(max-width:992px)')
  if (matches === true) {
    return (
      <Grid
        lg={3}
        md={12}
        sm={12}
        xs={12}
        sx={{
          borderRight: '1px solid grey',
          overflowY: 'auto',
          width: 'atuo',
        }}
      >
        {matches === true ? (
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography>User list</Typography>
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
              </List>
            </AccordionDetails>
          </Accordion>
        ) : (
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
        )}
      </Grid>
    )
  }
}
