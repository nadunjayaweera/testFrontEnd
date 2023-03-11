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
    name: 'Product 1',
    category: 'Category 1',
    price: 10.99,
  },
  {
    id: 2,
    name: 'Product 2',
    category: 'Category 2',
    price: 19.99,
  },
  {
    id: 3,
    name: 'Product 3',
    category: 'Category 1',
    price: 5.99,
  },
];

export default function ProductList() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Product Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'price', headerName: 'Price ($)', type: 'number', width: 120 },
  ];

  const rows = dummyProducts.map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
  }));

 const handleCellDoubleClick = React.useCallback(
  (params) => {
     console.log("click click");
    const rowId = params.id;
    const field = params.field;
    const editedRows = {
      ...editRowsModel,
      [rowId]: { ...editRowsModel[rowId], [field]: params.value },
    };
    setEditRowsModel(editedRows);
  },
  [editRowsModel],
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
