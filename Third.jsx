import {  Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Third = () => {
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h5'>Details</Typography> <br />
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
            <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
           <TextField id="ouylined-basic" label="Place" variant="outlined"  fullWidth/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
           <TextField id="outlined-basic" label="Age" variant="outlined"fullWidth />
           </Grid>
           <Grid item xs={12} sm={6} md={6}>
           <TextField id="outlined-basic" label="Address" variant="outlined"fullWidth />
           </Grid>
            </Grid>
    
     </div>   
  )
}

export default Third