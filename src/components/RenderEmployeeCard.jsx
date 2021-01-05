//Employee Card component
//Employee Card will have Data from props

import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "../styles/RenderEmployeeCard.module.css";

class RenderEmployeeCard extends Component {
  renderEmployeeProfile = (event) => {
    this.props.history.push(`/employeeList/${this.props.employee.id}`);
    // console.log(this.props);
  };
  render() {
    let { employee } = this.props;
    return (
      <div onClick={this.renderEmployeeProfile} className={styles["col"]}>
        <div className={styles["container"]}>
          <div className={styles["front"]}>
            <div className={styles["inner"]}>
              <div className={styles["employee-image"]}>
                <img src={employee.profile_url.url} alt={employee.empName} />
              </div>
              <p>{employee.empName}</p>

              <span>{employee.empCompany.split("_").join(" ")}</span>
            </div>
          </div>

          <div className={styles["back"]}>
            <div className={styles["inner"]}>
              <h2>
                {/* <Link
                  style={{ textDecoration: "none", color: "#3c403d" }}
                  className="link-rem-style"
                  to={`/employeeList/${employee.id}`}
                > */}
                <p className="hover">{employee.empName}</p>
                {/* </Link> */}
              </h2>
              <p>{employee.empPosition}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(RenderEmployeeCard);
