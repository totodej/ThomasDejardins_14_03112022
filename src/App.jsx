import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList.jsx";
import Error404 from "./pages/Error404";
import { AppProvider } from "./context/context";

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<EmployeeList />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
