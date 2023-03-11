import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';

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
    id: 1,
    name: 'Chocolate Chip Cookies',
    quantity: '20',
    price: 580,
    weight: 200,
  },
  {
    id: 2,
    name: 'Dairy Milk',
    quantity: '5',
    price: 100,
    weight: 35,
  },
  {
    id: 3,
    name: 'Toffee Crisp',
    quantity: '30',
    price: 165,
    weight: 30,
  },
];

export default function ProductList() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Product Name', width: 200, editable: true },
    { field: 'quantity', headerName: 'Quantity', width: 130, type: 'number', editable: true },
    { field: 'price', headerName: 'Price (Rs.)', type: 'number', width: 120, editable: true },
    { field: 'weight', headerName: 'Weight (g.)', type: 'number', width: 120, editable: true },
  ];

  const rows = dummyProducts.map((product) => ({
    id: product.id,
    name: product.name,
    quantity: product.quantity,
    price: product.price,
    weight: product.weight,
  }));

 const handleCellDoubleClick = React.useCallback(
  (params) => {
    const rowId = params.id;
    const field = params.field;
    const isCellEditable = params.colDef.editable !== false;

    if (!isCellEditable) {
      return;
    }

    const editedRows = {
      ...editRowsModel,
      [rowId]: { ...editRowsModel[rowId], [field]: params.value },
    };

    setEditRowsModel(editedRows);
  },
  [editRowsModel]
);



  return (
    <div style={{ height: 400, width: '100%' }}>
      <StripedDataGrid
        rows={rows}
        columns={columns}
        onCellDoubleClick={handleCellDoubleClick}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={(newModel) => setEditRowsModel(newModel)}
      />
    </div>
  );
}
