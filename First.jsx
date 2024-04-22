import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const First = () => {
    var [input,setInput]=useState()
    const inputHandler=(e)=>{
       console.log(e.target.value)
       setInput(e.target.value)
    }
  return (
    <div style={{margin:'10%'}}>
       
       <Typography variant='h4'></Typography>
        <TextField variant='outlined' label="Enter" onChange={inputHandler}></TextField> <br /> <br />
        <TextField variant='outlined' label="Password" type='password'></TextField> <br /><br />
        <Button variant='contained'> submit</Button>
       
    </div>
  )
}

export default First