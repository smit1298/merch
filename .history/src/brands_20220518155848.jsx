import React from 'react';
import {Grid, } from "@mui/material";

function Brands() {
  return (
    <div>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </div>
  );
}

export default Brands