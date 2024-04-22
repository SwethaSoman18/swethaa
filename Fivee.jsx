import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import React, { useState } from 'react'

const Fivee = () => {
    var[input,setInputs] =useState([]);
    var[data,setData]=useState([]);

    const inputHandler =(e)=>{
        setInputs({...input,[e.target.name]:e.target.value});
        console.log(input);
    } 
     const addHandler=()=>{
          console.log("clicked");
          setData((data)=>[...data,input]);
          console.log(data);
     }

  return (
    <div style={{margin:'5%'}}>
        <TextField variant='outlined' label='Name' name="sname" onChange={inputHandler}></TextField> &nbsp;&nbsp;
        <TextField variant='outlined' label='age' name="age" onChange={inputHandler}></TextField><br /> <br />
        <TextField variant='outlined' label='place' name="place" onChange={inputHandler}></TextField> &nbsp;&nbsp;
        <TextField variant='outlined' label='PhoneNo' name="no" onChange={inputHandler}></TextField> <br /> <br />
        <Button variant='contained' onClick={addHandler}>SUBMIT</Button>
        <br /><br /><br />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{color:"purple",fontStyle:"oblique"}}>Name</TableCell>
                <TableCell style={{color:"purple",fontStyle:"oblique"}}>Age</TableCell>
                <TableCell style={{color:"purple",fontStyle:"oblique"}}>Place</TableCell>
                <TableCell style={{color:"purple",fontStyle:"oblique"}}>PhoneNO</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {data.map((v, i)=>{
                    return (
                        <TableRow key={i}>
                        <TableCell>{v.sname}</TableCell>
                        <TableCell>{v.age}</TableCell>
                        <TableCell>{v.place}</TableCell>
                        <TableCell>{v.no}</TableCell>
                    </TableRow>
                    )
                })}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Fivee