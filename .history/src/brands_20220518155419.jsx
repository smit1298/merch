import React from 'react';
import {Gr} from "@mui/material";

function brands() {
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

export default brands