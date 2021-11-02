import { Home, Money, ShoppingBag } from "@mui/icons-material";
import { Typography } from "@mui/material";

import NavItem from "../custom/NavItem";

export default function LeftBar() {
  return (
    <div>
      <NavItem link="/">
        <Home sx={{ ml: 3, mr: 2 }} />
        <Typography>Home</Typography>
      </NavItem>
      <NavItem link="/buy-coin">
        <ShoppingBag sx={{ ml: 3, mr: 2 }} />
        <Typography>Buy Coin</Typography>
      </NavItem>
      <NavItem link="/transaction/history">
        <Money sx={{ ml: 3, mr: 2 }} />
        <Typography>Transaction</Typography>
      </NavItem>
    </div>
  );
}
