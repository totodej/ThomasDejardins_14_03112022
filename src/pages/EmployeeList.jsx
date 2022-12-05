import { Link } from "react-router-dom";
import "../styles/pages/EmployeeList.css";
import Header from "../components/Header";
import EmployeesTable from "../components/EmployeeList/EmployeesTable";
import { AppContext } from "../context/context";
import { useContext } from "react";

function EmployeeList() {
  const list = useContext(AppContext);

  return (
    <div>
      <Header />
      <div id="employee-div" className="container-employee">
        <div className="buttons-pages">
          <Link to="/" className="link-create-employee">
            Create Employee
          </Link>
          <h2>Current Employees</h2>
        </div>

        <EmployeesTable employees={list.employees} />
      </div>
    </div>
  );
}

export default EmployeeList;
