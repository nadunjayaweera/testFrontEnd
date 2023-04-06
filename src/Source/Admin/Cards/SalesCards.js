import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';


const TodaySales = () => {
  const TodaySale = 3760; 
  const today = new Date().toLocaleDateString(); // Get the current date as a string
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Today Sales ({today})
        </Typography>
        <Typography variant="h4" component="div">
          Rs.{TodaySale}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ThisMonth = () => {
  const ThisMonthSale = 15000;
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const thisMonth = new Date().getMonth();
  const thisMonthName = monthNames[thisMonth];

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {thisMonthName} Sales
        </Typography>
        <Typography variant="h4" component="div">
          Rs.{ThisMonthSale}
        </Typography>
      </CardContent>
    </Card>
  );
};

const LastMonth = () => {
  const LastMonthSale = 12700; 
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const thisMonth = new Date().getMonth();
  const lastMonth = monthNames[thisMonth - 1];
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          Last Month Sales ({lastMonth})
        </Typography>
        <Typography variant="h4" component="div">
          Rs.{LastMonthSale}
        </Typography>
      </CardContent>
    </Card>
  );
};


export { TodaySales, ThisMonth, LastMonth };
