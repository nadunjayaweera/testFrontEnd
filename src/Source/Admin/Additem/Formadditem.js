import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(3),
  },
  imageContainer: { 
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(0.5), // Updated padding to 0.5
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  maxWidth: 200,
  '& img': {
    width: '100%', // Set width to 100%
    height: '100%', // Set height to 100%
    objectFit: 'contain', // Maintain aspect ratio of image
      },
  
},
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

export default function FormAddProduct() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [image, setImage] = useState(null);
  const [hasErrors, setHasErrors] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    weight: '',
  });

  const handleFormChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
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

    const data = new FormData();
    data.append('name', formData.name);
    data.append('quantity', formData.quantity);
    data.append('price', formData.price);
    data.append('weight', formData.weight);
    data.append('image', image);
    console.log("the data is:");
    console.log(data);
    const requestOptions = {
      method: 'POST',
      body: data,
    };

    fetch('http://localhost:8080/api/v1/additem', requestOptions)
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
            onChange = {handleFormChange}
            // defaultValue={product.name || ""}
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
            onChange = {handleFormChange}
            type="number"
            // defaultValue={product.quantity||""}
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
            // defaultValue={product.price||""}
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
            // defaultValue={product.weight||""}
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
          />
          </div>
          </Box>
          
          
            <div className={classes.imageContainer}>
              {image && (
            <div>
            <img src={URL.createObjectURL(image)} alt="product image" style={{maxWidth:200, maxHeight:200}} loading="lazy" />
          </div>
          )}
          {!image && (<div>
                <img
              src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Antu_insert-image.svg/2048px-Antu_insert-image.svg.png"} alt = "product image" style={{maxWidth:200, maxHeight:200}} loading="lazy"
            />
          </div>)}
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
