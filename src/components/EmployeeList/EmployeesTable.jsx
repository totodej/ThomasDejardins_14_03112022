import "../../styles/components/EmployeeList/EmployeesTable.css";
import DataTable from "react-data-table-component";
import columns from "../../data/columns";
import { useState, useMemo } from "react";

function EmployeesTable({ employees }) {
  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const filteredItems = employees?.filter(
    (item) =>
      (item.firstName &&
        item?.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName &&
        item?.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.department &&
        item?.department.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth &&
        item?.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate &&
        item?.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state &&
        item?.state.abbreviation
          .toLowerCase()
          .includes(filterText.toLowerCase())) ||
      (item.city &&
        item?.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street &&
        item?.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zipCode && (item?.zipCode + "").includes(filterText))
  );
  console.log(filteredItems);

  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <>
      <input
        type="text"
        placeholder="Filter"
        aria-label="Search Input"
        value={filterText}
        onChange={onFilter}
        autoFocus
      />
      <button id="btn-filter" type="button" onClick={onClear}>
        X
      </button>
    </>
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationRowsPerPageOptions={[10, 25, 50, 100]}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      persistTableHead
      noDataComponent="No Employees"
    />
  );
}

export default EmployeesTable;
