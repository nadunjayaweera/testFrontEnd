import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TodaySales = () => {
  const TodaySale = 3760; // Replace with the actual total sales amount for the month
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Today Sales
        </Typography>
        <Typography variant="h4" component="div">
          Rs.{TodaySale}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ThisMonth = () => {
  const ThisMonthSale = 15000; // Replace with the actual total sales amount for the month
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          This Month Sales
        </Typography>
        <Typography variant="h4" component="div">
          Rs.{ThisMonthSale}
        </Typography>
      </CardContent>
    </Card>
  );
};


export { TodaySales, ThisMonth };
