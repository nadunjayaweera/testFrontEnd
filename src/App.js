// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './Source/LoginPage';
import ItemPage from './Source/item';
import SignUpPage from './Source/SignUp';
import DashboardContent from './Source/Dashboard';
import SalesPage from './Source/Sales';
import ReportContent from './Source/reports';
import CutomersList from './Source/Customers'


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
        <Route exact path="/customers" component={CutomersList}/>
      </Switch>
    </Router>
  );
}

export default App;
