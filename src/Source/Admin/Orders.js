import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, name, item, amount) {
  return { id, date, name, item, amount };
}

const rows = [
  createData(
    0,
    '1 Mar, 2023',
    'Nadun Jayaweera',
    'Chocolate Cookies',
    580.00,
  ),
  createData(
    1,
    '1 Mar, 2023',
    'Sadaru DeSilva',
    'Dairy Milk',
    100.00,
  ),
  createData(
      2,
      '1 Mar, 2023',
      'Pramila Krishan',
      'Toffee Crisp',
      165.00),
  createData(
    3,
    '2 Mar, 2023',
    'Malaka Yayakodi',
    'Hershy nuggets',
    450.00,
  ),
  createData(
    4,
    '2 Mar, 2023',
    'Kaweesha Thilakarathna',
    'Juzt Jelly',
    70.00,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Sales</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Item</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.item}</TableCell>
              <TableCell align="right">{`Rs.${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}