import { Component } from "react";
import RenderEmployeeCard from "./RenderEmployeeCard";
import styles from "../styles/RenderEmployeeCard.module.css";
import Nav from './Navigation';

class EmployeeList extends Component {
  render() {
    return (
      <div>
        <Nav />
        {/* <h1>Employee List</h1> */}
        <div className={styles["wrapper"]}>
          <div className={styles["cols"]}>
            {this.props.location.state.employeeList.map((employee) => {
              return (
                
                <RenderEmployeeCard employee={employee} key={employee.id} />
                
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default EmployeeList;
