import { AccountBox, Chat, Home, Money, ShoppingBag } from '@mui/icons-material'
import { Typography } from '@mui/material'

import NavItem from '../custom/NavItem'

export default function LeftBar() {
  return (
    <div>
      <NavItem link="/home">
        <Home sx={{ ml: 3, mr: 2 }} />
        <Typography>Home</Typography>
      </NavItem>
      <NavItem link="/messenger">
        <Chat sx={{ ml: 3, mr: 2 }} />
        <Typography>Messenger</Typography>
      </NavItem>
      <NavItem link="/profile">
        <AccountBox sx={{ ml: 3, mr: 2 }} />
        <Typography>Profile</Typography>
      </NavItem>
    </div>
  )
}
