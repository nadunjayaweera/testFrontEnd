import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';


export const mainListItems = (
    <React.Fragment>
    <Link to="/dashboard" style={{textDecoration:'none', color:'inherit'}}>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    </Link>
            
    <Link to="/sales" style={{textDecoration:'none', color:'inherit'}}> 
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Sales" />
    </ListItemButton>
    </Link>   

    <Link to="/customers" style={{textDecoration:'none', color:'inherit'}}>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    </Link>
        
    <Link to="/reports" style={{textDecoration:'none', color:'inherit'}}>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
        </ListItemButton>
    </Link>
            
    <ListItemButton>
      <ListItemIcon>
        <AddBoxIcon />
      </ListItemIcon>
      <ListItemText primary="Add Item" />
    </ListItemButton>
  </React.Fragment>
);
