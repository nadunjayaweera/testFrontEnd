import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { useHistory } from 'react-router-dom';


export default function FormEditproducts() {
  const history = useHistory();
  const handleSignUp = () => {
    history.push('/item');
  };
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <FormControl>
  <FormLabel>Product Name</FormLabel>
  <Input
    // html input attribute
    name="firstName"
    type="text"
  />
</FormControl>
<FormControl>
  <FormLabel>Quantity</FormLabel>
  <Input
    // html input attribute
    name="lastName"
    type="text"
  />
</FormControl>

    <FormControl>
    <FormLabel>Price (RS.)</FormLabel>
    <Input
        // html input attribute
        name="email"
        type="email"
    />
    </FormControl>
    <FormControl>
    <FormLabel>Weight</FormLabel>
    <Input
        // html input attribute
        name="password"
        type="password"
    />
    </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSignUp}>
            Sign up
          </Button>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}