import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Bikes from "./component/Bickes/Bikes";
import Login from "./component/Login/Login";
import AuthProvider from "./component/context/AuthProvider";
import Registration from "./component/Login/Registration/Registration";
import BuyNow from "./component/shared/BuyNow/BuyNow";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import Deshbord from "./component/Deshbord/Deshbord";
import UserOrders from "./component/Deshbord/order/UserOrders";

import Payment from "./component/Pay/Payment";

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/bikes">
              <Bikes></Bikes>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute path="/buynow/:_id">
              <BuyNow></BuyNow>
            </PrivateRoute>
            <PrivateRoute path="/deshbord">
              <Deshbord></Deshbord>
            </PrivateRoute>
            <Route path="/yourorders">
              <UserOrders></UserOrders>
            </Route>
            <Route path="/pay">
              <Payment></Payment>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
