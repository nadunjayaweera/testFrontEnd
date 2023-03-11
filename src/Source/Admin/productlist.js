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

export default function StripedGrid({ rows, columns }) {
  const [editRowsModel, setEditRowsModel] = React.useState({});
  
  const handleCellDoubleClick = React.useCallback(
    (params, event) => {
      const rowId = params.id;
      const field = params.field;
      const editedRows = {
        ...editRowsModel,
        [rowId]: { ...editRowsModel[rowId], [field]: event.target.value },
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
