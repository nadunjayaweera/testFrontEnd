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


export default function SignUpPage() {
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
          <div>
            <Typography level="h4" component="h1">
              <b>Sign Up</b>
            </Typography>
            <Typography level="body2">Create a new account.</Typography>
          </div>
          <FormControl>
  <FormLabel>First Name</FormLabel>
  <Input
    // html input attribute
    name="firstName"
    type="text"
    placeholder="Nadun"
  />
</FormControl>
<FormControl>
  <FormLabel>Last Name</FormLabel>
  <Input
    // html input attribute
    name="lastName"
    type="text"
    placeholder="Jayaweera"
  />
</FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              // html input attribute
              name="email"
              type="email"
              placeholder="nadun@gmail.com"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              // html input attribute
              name="password"
              type="password"
              placeholder="password"
            />
          </FormControl>

          <Button sx={{ mt: 1 /* margin top */ }} onClick={handleSignUp}>
            Sign up
          </Button>
          <Typography
            endDecorator={<Link href="/">Log in</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Already have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}
