import { Grid } from "@mui/material";
import React from "react";
import SummeryCard from "./SummeryCard";

export default function Summery() {
  return (
    <>
      <Grid container spacing={2}>
        <SummeryCard text="Total Purchased Coin" number="33" />
        <SummeryCard text="Total sold Coin" number="20" />
        <SummeryCard text="Total Client" number="2" />
        <SummeryCard text="Total Client" number="2" />
      </Grid>
    </>
  );
}
