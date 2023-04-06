
import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

const dummyProducts = [
  {
    date: '1 Mar, 2023',
    id: 1,
    name: 'Nadun Jayaweera',
    item: 'Chocolate Cookies',
    amount: 580.00.toLocaleString('en-US', {minimumFractionDigits: 2}),
  },
  {
    date: '1 Mar, 2023',
    id: 2,
    name: 'Sadaru DeSilva',
    item: 'Dairy Milk',
    amount: 100.00.toLocaleString('en-US', {minimumFractionDigits: 2}),
  },
  {
    date: '1 Mar, 2023',
    id: 3,
    name: 'Pramila Krishan',
    item: 'Toffee Crisp',
    amount: 165.00.toLocaleString('en-US', {minimumFractionDigits: 2}),
  },
  {
    date: '2 Mar, 2023',
    id: 4,
    name: 'Malaka Jayakodi',
    item: 'Hershy Nuggets',
    amount: 165.00.toLocaleString('en-US', {minimumFractionDigits: 2}),
  },
  {
    date: '2 Mar, 2023',
    id: 5,
    name: 'Kaweesha Thilakarathna',
    item: 'Juzt Jelly',
    amount: 165.00.toLocaleString('en-US', {minimumFractionDigits: 2}),
  },
];


export default function Orders() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'name',
      headerName: (
        <div style={{ textAlign: 'left' }}>
          Name
        </div>
      ),
      width: 220,
      type: 'text'
    },
   {
      field: 'item',
      headerName: (
        <div style={{ textAlign: 'left' }}>
          Item
        </div>
      ),
      width: 200,
      type: 'text'
    },
    { field: 'amount', headerName: 'Amount (Rs. )', type: 'number', width: 150 },
    
];
  
const handleDownloadPdf = () => {
  // Get the filtered rows from the grid
  const filteredRows = gridRef.current?.getRows?.() || [];

  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add a title to the PDF
  doc.text('Sales Data', 10, 10);

  // Define the columns for the PDF table
  const columns = ['Date', 'ID', 'Name', 'Item', 'Amount (Rs.)'];

  // Map the filtered rows to an array of arrays
  const data = filteredRows.map((row) => [
    row.date,
    row.id,
    row.name,
    row.item,
    row.amount,
  ]);

  // Add the table to the PDF document
  doc.autoTable({
    head: [columns],
    body: data,
  });

  // Save the PDF document
  doc.save('sales.pdf');
};

  const gridRef = React.useRef(null);

  

  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <button onClick={handleDownloadPdf}>Download PDF</button>
      <StripedDataGrid
        rows={dummyProducts}
        columns={columns}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={(newModel) => setEditRowsModel(newModel)}
        ref={gridRef}
      />
    </div>
  );
}
