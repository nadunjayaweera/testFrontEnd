import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, createdate, firstName, lastName, email) {
  return { id, createdate, firstName, lastName, email };
}

const rows = [
  createData(
    0,
    '3 March, 2023',
    'Nadun',
    'Jayaweera',
    'nadunmj@gmail.com',
    
  ),
  createData(
      1,
    '3 March, 2023', 
    'Sadaru',
    'DeSilva',
    'sadarudesilva@gmail.com',
    
  ),
  createData(
      2,
      '4 March, 2023', 
      'Pramila',
      'Krishan',
      'pramilakrishan@gmail.com',
     
  ),
  createData(
    3,
    '4 March, 2023', 
    'Malaka',
    'Yayakodi',
    'malakajayakodi@gmail.com',
    
  ),
  createData(
    4,
    '5 March, 2023', 
    'Kaweesha',
    'Thilakarathna',
    'kaweeshath@gmail.com',
    
  ),
];

// function preventDefault(event) {
//   event.preventDefault();
// }

export default function Users() {
  return (
    <React.Fragment>
      <Title>Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Create Date</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
                  <TableCell>{row.createdate}</TableCell>
              <TableCell>{row.firstName}</TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}