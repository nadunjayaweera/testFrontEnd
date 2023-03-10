// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Source/Login/LoginPage';
import ItemPage from './Source/User/item';
import SignUpPage from './Source/Login/SignUp';
import DashboardContent from './Source/Admin/Dashboard';
import SalesPage from './Source/Admin/Sales';
import ReportContent from './Source/Admin/reports';
import CutomersList from './Source/Admin/Customers';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/item" component={ItemPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/dashboard" component={DashboardContent} />
        <Route exact path="/sales" component={SalesPage} />
        <Route exact path="/reports" component={ReportContent} />
        <Route exact path="/customers" component={CutomersList} />
      </Switch>
    </Router>
  );
}

export default App;
