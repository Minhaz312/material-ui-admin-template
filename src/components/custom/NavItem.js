import { Button, Divider } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ children, link }) {
  return (
    <>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Button
          variant="text"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            color: "#000",
            p: 1,
          }}
        >
          {children}
        </Button>
      </Link>
      <Divider />
    </>
  );
}
