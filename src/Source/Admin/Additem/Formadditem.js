import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const useStyles = makeStyles(() => ({
  container: {
    padding: '10px'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '20px',
  },
  imageContainer: {
    border: '1px solid grey', // Replace with your desired border style
    borderRadius: '4px', // Replace with your desired border radius value or CSS property
    padding: '5px', // Replace with your desired padding value or CSS property
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px', // Replace with your desired height value or CSS property
    maxWidth: '200px', // Replace with your desired max width value or CSS property
  
  },
  formControl: {
    marginBottom: '20px',
    minWidth: 120,
  },
}));

export default function FormAddProduct() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [image, setImage] = useState(null);
  const [hasErrors, setHasErrors] = useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    quantity: '',
    price: '',
    weight: '',
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasEmptyFields = Object.values(formData).some((value) => !value.trim());

    if (hasEmptyFields) {
      setHasErrors(true);
      return;
    }

    fetch('http://localhost:8080/api/v1/additem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      {hasErrors && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Please fill out all fields.
        </Alert>
      )}
      <Grid container spacing={3} className={classes.container}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1">
            Add Item
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Product Name"
            variant="outlined"
            value={formData.name}
            onChange={handleFormChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="quantity"
            name="quantity"
            label="Quantity"
            variant="outlined"
            value={formData.quantity}
            onChange={handleFormChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="price"
            name="price"
            label="Price"
            variant="outlined"
            value={formData.price}
            onChange={handleFormChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            id="weight"
            name="weight"
            label="Weight"
            variant="outlined"
            value={formData.weight}
            onChange={handleFormChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 2 }}>
            <div>
              <label htmlFor="image-upload">Product Image </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                value={formData.image}
              />
            </div>
          </Box>
          <div className={classes.imageContainer}>
            {image && (
              <div>
                <img src={URL.createObjectURL(image)} alt="product image" style={{ maxWidth: 200, maxHeight: 200 }} loading="lazy" />
              </div>
            )}
            {!image && (
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/2048px-Antu_insert-image.svg.png"
                  alt="product image"
                  style={{ maxWidth: 200, maxHeight: 200 }}
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </Grid>
        <Grid item xs={12} className={classes.buttonContainer}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
