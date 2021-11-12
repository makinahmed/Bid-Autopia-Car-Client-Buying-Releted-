import './App.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './Pages/Home/Navigation/Navigation';
import AddProducts from './Pages/Home/Products/AddProducts/AddProducts';
import Explore from './Pages/Explore/Explore/Explore';
import CarParchases from './Pages/CarPurchase/CarPurchase';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import Registration from './Pages/Registration/Registration';
import Login from './Pages/Login/Login';
import AuthContext from './Pages/Context/AuthContext';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateAdminRoute from './Pages/PrivateAdminRoute/PrivateAdminRoute';

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateAdminRoute exact path="/addProducts">
            <AddProducts></AddProducts>
          </PrivateAdminRoute>
          <PrivateAdminRoute exact path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateAdminRoute>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivateAdminRoute exact path="/manageAllOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateAdminRoute>
          <PrivateAdminRoute exact path="/manageProducts">
            <ManageProducts></ManageProducts>
          </PrivateAdminRoute>
          <Route path="/myOrders">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/explore/:id">
            <CarParchases></CarParchases>
          </PrivateRoute>
          <PrivateRoute path="/carPurchase/:id">
            <CarParchases></CarParchases>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
