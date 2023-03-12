import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

export default function FormEditProduct() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { product, quantity, price, weight } = location.state;

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Edit Product
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-name"
            label="Product Name"
            variant="outlined"
            defaultValue={product.name || ""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-quantity"
            label="Quantity"
            variant="outlined"
            type="number"
            defaultValue={product.quantity||""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-price"
            label="Price"
            variant="outlined"
            type="number"
            defaultValue={product.price||""}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-weight"
            label="Weight"
            variant="outlined"
            type="number"
            defaultValue={product.weight||""}
          />
        </Grid>
        <Grid item xs={12} className={classes.buttonContainer}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
