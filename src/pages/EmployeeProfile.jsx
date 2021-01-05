//Employee Profile Component
import { Component } from "react";
import { data } from "../data/Data";
import styles from "../styles/EmployeeProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../components/Navigation";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);
class EmployeeProfile extends Component {
  state = {
    employee: {},
  };
  componentDidMount() {
    data(`/employee/getEmployeeById/${this.props.match.params.empId}`).then(
      (employee) => {
        this.setState({ employee: employee.data[0][0] });
      }
    );
  }

  render() {
    return (
      <div className={styles["card-container"]}>
        <Navigation />
        <div className={styles["card"]}>
          <div className={styles["left-container"]}>
            <div className={styles["left-contents"]}>
              <div className={styles["image-container"]}>
                {this.state.employee.profile_url ? (
                  <img
                    src={this.state.employee.profile_url.url}
                    alt={this.state.employee.empName}
                  />
                ) : (
                  <img src="" alt="" />
                )}
              </div>
              <div className={styles["center"]}>
                <h2>{this.state.employee.empName}</h2>
                {this.state.employee.empCompany ? (
                  <p>{this.state.employee.empCompany.split("_").join(" ")}</p>
                ) : (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          <div className={styles["right-container"]}>
            <div className={styles["right-contents"]}>
              <h2>{this.state.employee.empPosition}</h2>
              <p>
                <strong>Skills </strong>: {this.state.employee.skills}
              </p>

              <p>
                <strong>Hobbies </strong> : {this.state.employee.hobbies}
              </p>
              <div className={styles["social-links"]}>
                <a>
                  <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
                </a>
                <a>
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
                </a>
                <a>
                  <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EmployeeProfile;
