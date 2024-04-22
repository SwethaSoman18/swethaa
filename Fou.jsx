import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Fou = () => {
  var data=[{Name:"swetha",age:19,place:"mvpa",Address:"abcd"},
            {Name:"ritika",age:18,place:"tsr",Address:"abcd"}];
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Address</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
           {data.map((value,index)=>{
               return<TableRow key={index}>
                <TableCell>{value.Name}</TableCell>
                <TableCell>{value.age}</TableCell>
                <TableCell>{value.place}</TableCell>
                <TableCell>{value.Address}</TableCell>
               </TableRow>
           })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Fou