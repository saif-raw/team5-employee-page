import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import EmployeeList from "../components/EmployeeList";
// import EmployeeProfile from "../components/EmployeeProfile";
import EmployeeProfile from "../pages/EmployeeProfile";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/employeeList/raw" exact component={EmployeeList} />
          <Route path="/employeeList/cs" exact component={EmployeeList} />
          <Route
            path="/employeeList/surfboard"
            exact
            component={EmployeeList}
          />
          <Route path="/employeeList/all" exact component={EmployeeList} />
          <Route
            path="/employeeList/:empId"
            exact
            component={EmployeeProfile}
          />
          {/* <Route
            path="/employeeList"
            exact
            render={() => {
              return <EmployeeList employeeData="Some Data" />;
            }}
          /> */}
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
export default Router;
