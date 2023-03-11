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
    image: "http://cdn.shopify.com/s/files/1/0260/6877/9066/products/100895_f7ed1085-0cc9-4f5e-a25d-771509b1b168.jpg?v=1627811177?auto=format&fit=crop&w=286",
  },
  {
    id: 2,
    name: 'Dairy Milk',
    quantity: '5',
    price: 100,
    weight: 35,
    image:"https://cmhlprodblobstorage1.blob.core.windows.net/sys-master-cmhlprodblobstorage1/h10/ha7/9030481281054/cmhl_1000000340844_1_hero.jpg_Default-WorkingFormat_1000Wx1000H?auto=format&fit=crop&w=286",
   
  },
  {
    id: 3,
    name: 'Toffee Crisp',
    quantity: '30',
    price: 165,
    weight: 30,
    image:"https://www.britishcornershop.co.uk/img/large/CY0273.jpg?auto=format&fit=crop&w=286",
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
    {
    field: 'image',
      headerName: 'Image',
    editable:true,
    width: 150,
    renderCell: (params) => (
      <img src={params.row.image} alt={params.row.name} style={{ width: 100, height: 100 }} />
    ),
  },
  ];

  const rows = dummyProducts.map((product) => ({
    id: product.id,
    name: product.name,
    quantity: product.quantity,
    price: product.price,
    weight: product.weight,
    image: product.image,
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
