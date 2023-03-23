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

const dummyUsers = [
  {
    id: 1,
    createdate: '3 March, 2023',
    firstname: 'Nadun',
    lastname: 'Jayaweera',
    email: 'nadunmj@gmail.com',
  },
  {
    id: 2,
    createdate: '3 March, 2023',
    firstname: 'Sadaru',
    lastname: 'DeSilva',
    email: 'sadarudesilva@gmail.com',
  },
  {
    id: 3,
    createdate: '4 March, 2023',
    firstname: 'Pramila',
    lastname: 'Krishan',
    email: 'pramilakrishan@gmail.com',
  },
];

export default function Users() {
  const [editRowsModel, setEditRowsModel] = React.useState({});

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'createdate', headerName: 'Create Date', width: 200 },
    {
      field: 'firstname',
      headerName: (
        <div style={{ textAlign: 'left' }}>
          Fist Name
        </div>
      ),
      width: 130
    },
    {
      field: 'lastname',
      headerName: (
        <div style={{ textAlign: 'left' }}>
          Last Name 
        </div>
      ),
      width: 130
    },
    {
      field: 'email',
      headerName: (
        <div style={{ textAlign: 'left' }}>
          Email
        </div>
      ),
      width: 200
    },  
];
  
  return (
    
    <div style={{ height: 400, width: '100%' }}>
      <StripedDataGrid
        rows={dummyUsers}
        columns={columns}
        editRowsModel={editRowsModel}
        onEditRowsModelChange={(newModel) => setEditRowsModel(newModel)}
      />
    </div>
  );
}
