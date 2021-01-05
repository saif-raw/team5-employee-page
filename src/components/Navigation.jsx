import { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navigation2.css";

class Navigation extends Component {
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
            <li className="nav-route">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-route">
              <Link to="/">Raw Engineering</Link>
            </li>

            <li className="nav-route">
              <Link to="/">Surfboard</Link>
            </li>
            <li className="nav-route">
              <Link to="/">Contentstack</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;
