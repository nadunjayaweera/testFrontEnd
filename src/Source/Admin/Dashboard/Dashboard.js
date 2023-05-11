import { useEffect, useState } from 'react';
import { Chart, MonthChart } from '../Reports/chart';
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems } from './listitems';
import Orders from '../Sales/Orders';
import { AppBar, Drawer, mdTheme, Copyright } from '../Structure';
import Title from '../Dashboard/title';
import Notificationicon from '../Notification/Notifications';
import { TodaySales, ThisMonth, LastMonth } from '../Cards/SalesCards';
import { Card } from '@mui/material';

export default function DashboardContent() {
  const [open, setOpen] = React.useState(true);
   const [humidity, setHumidity] = useState(null);
   const [temperature, setTemperature] = useState(null);
   const toggleDrawer = () => {
    setOpen(!open);
   };
  
   useEffect(() => {
    // Fetch humidity and temperature data from API
    fetch('http://localhost:8080/api/v1/data')
      .then(response => response.json())
      .then(data => {
        setHumidity(data.humidity);
        setTemperature(data.temperature);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Notificationicon/>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card sx={{ maxWidth: 275 }}>
                  <TodaySales />
                </Card>
              </Grid>

               <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '24px',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Temperature
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="primary">
                  {temperature != null ? `${temperature}°C` : 'Loading...'}
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '24px',
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Humidity
                </Typography>
                <Typography variant="h4" fontWeight="bold" color="secondary">
                  {humidity != null ? `${humidity}%` : 'Loading...'}
                </Typography>
              </Card>
            </Grid>
          

              {Chart}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height:240,
                  }}
                 >
                  <Chart />
                  </Paper>
              </Grid>
              
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <div>
                    <Title>Recent Sales</Title>
                  </div>
                  <Orders/>
                </Paper>
              </Grid>
            </Grid>
            <Box sx={{ pt: 4 }}>
              <Copyright />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
