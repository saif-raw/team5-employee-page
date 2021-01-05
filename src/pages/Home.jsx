// This Page will render all the Components using React Routing
// this will maintain the State
//Data of Employee whoes companyName == "Some Company" will be send as a props to employee List
// Employee List will render all the employee cards according to the employeeList send as props

import { Component } from "react";
import { data } from "../data/Data";
import "../styles/Home.css";
import ParticlesBg from "particles-bg";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    employeeList: [],
  };

  renderRawEmployee = (event) => {
    data("/employee/getAllEmployee?company=Raw_Engineering").then(
      (employeeList) => {
        this.props.history.push("/employeeList/raw", {
          employeeList: [...employeeList.data],
        });
      }
    );
  };

  renderCsEmployee = (event) => {
    data("/employee/getAllEmployee?company=Contentstack").then(
      (employeeList) => {
        this.props.history.push("/employeeList/cs", {
          employeeList: [...employeeList.data],
        });
      }
    );
  };

  renderSbEmployee = (event) => {
    data("/employee/getAllEmployee?company=Surfboard_Ventures").then(
      (employeeList) => {
        this.props.history.push("/employeeList/surfboard", {
          employeeList: [...employeeList.data],
        });
      }
    );
  };
  render() {
    return (
      <div>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav">
            <li className="current">
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/">Gallery</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/"> Events</Link>
            </li>
            <li>
              <Link to="/"> Career</Link>
            </li>
            <li>
              <Link to="/"> Contact</Link>
            </li>
          </ul>
        </nav>
        <header id="home">
          <div className="row banner">
            <ParticlesBg num={60} type="cobweb" bg={true} />
            <div className="banner-text">
              <div className="headbody">
                <h1 className="responsive-headline">Meet the team</h1>
                <hr />

                
                <button onClick={this.renderRawEmployee} className="button-raw">
                  Raw Engineering
                </button>

                
                <button
                  onClick={this.renderSbEmployee}
                  className="button-surfboard"
                >
                  Surfboard Ventures
                </button>

                
                <button onClick={this.renderCsEmployee} className="button-cs">
                  Contentstack
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* <HomeBody /> */}
        {/* <Navigation2 /> */}
      </div>
    );
  }
}

export default Home;
