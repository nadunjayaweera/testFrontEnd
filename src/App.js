// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Source/Login/LoginPage';
import SignUpPage from './Source/Login/SignUp';
import DashboardContent from './Source/Admin/Dashboard/Dashboard';
import Reports from './Source/Admin/Reports/reports';
import Customers from './Source/Admin/Customers/Customers';
import Sales from './Source/Admin/Sales/Sales';
import ItemList from './Source/User/item';
import Products from './Source/Admin/Products/Products';
import EditItem from './Source/Admin/Editproduct';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/item" component={ItemList} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/dashboard" component={DashboardContent} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/edit/:id?" component={EditItem} />
      </Switch>
    </Router>
  );
}

export default App;
