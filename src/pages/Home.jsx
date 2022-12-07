import "../styles/pages/Home.css";
import { useState } from "react";
import Header from "../components/Header";
import Dropdown from "../components/Home/Dropdown";
import statesList from "../data/statesData";
import departmentsList from "../data/departmentsData";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext } from "react";
import { AppContext } from "../context/context";
import Modal from "@hrnet/thomas-modal/dist/Modal";

function Home() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { dispatchEmployeeEvent } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      firstName,
      lastName,
      dateOfBirth: dateOfBirth.toLocaleDateString(),
      startDate: startDate.toLocaleDateString(),
      street,
      city,
      state,
      zipCode,
      department,
    };
    dispatchEmployeeEvent("ADD_EMPLOYEE", { newArray: employee });

    window.scrollTo(0, 0);
    setFirstName("");
    setLastName("");
    setDateOfBirth(new Date());
    setStartDate(new Date());
    setState("");
    setDepartment("");
    setStreet("");
    setCity("");
    setZipCode("");
    setModalIsOpen(true);
  };

  return (
    <div className="info-employee">
      <Header />
      <div className="container-home">
        <div className="buttons-pages">
          <h2>Create Employee</h2>
          <Link to="/list" className="link-current-employees">
            Current Employees
          </Link>
        </div>

        <form id="create-employee" onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstname"
            id="first-name"
          />
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastname"
            id="last-name"
          />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            selected={dateOfBirth}
            onChange={(date) => setDateOfBirth(date)}
            name="date-of-birth"
          />
          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            name="start-date"
          />

          <fieldset className="adress">
            <legend>Adress</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              name="street"
              id="street"
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              name="city"
              id="city"
            />

            <label htmlFor="state">State</label>
            <Dropdown
              name="state"
              list={statesList}
              item={state}
              setItem={setState}
              id="state"
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              name="zip-code"
              id="zip-code"
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Dropdown
            name="department"
            list={departmentsList}
            item={department}
            setItem={setDepartment}
            id="department"
          />
          <div className="submit-container">
            <button type="submit" className="save">
              Save
            </button>
          </div>
        </form>
        {modalIsOpen ? <Modal close={() => setModalIsOpen(false)} /> : null}
      </div>
    </div>
  );
}

export default Home;
