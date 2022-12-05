import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  const dispatchEmployeeEvent = (actionType, payload) => {
    if (actionType === "ADD_EMPLOYEE") {
      setEmployees([...employees, payload.newArray]);
    }
  };

  return (
    <AppContext.Provider value={{ employees, dispatchEmployeeEvent }}>
      {children}
    </AppContext.Provider>
  );
};
