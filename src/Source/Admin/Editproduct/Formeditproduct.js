import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, TextField, Grid, Typography } from '@mui/material';

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
            defaultValue="Product A"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-quantity"
            label="Quantity"
            variant="outlined"
            type="number"
            defaultValue={10}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-price"
            label="Price"
            variant="outlined"
            type="number"
            defaultValue={100}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="product-weight"
            label="Weight"
            variant="outlined"
            type="number"
            defaultValue={200}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="product-description"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla aliquam justo nec ex bibendum maximus. Curabitur quis risus at massa suscipit facilisis. Duis nec erat nec dolor bibendum viverra sit amet ut velit. Donec scelerisque enim eu ipsum placerat malesuada. Cras lacinia enim vel est tristique, et tincidunt elit malesuada. Aliquam eget eros ac risus malesuada pharetra. Sed varius augue nec est facilisis ullamcorper. Nunc convallis tortor sed dolor vestibulum malesuada. Nunc non lacinia risus."
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
