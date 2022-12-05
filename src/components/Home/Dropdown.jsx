import "../../styles/components/Home/Dropdown.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ list, item, setItem }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setItem(value);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggling}>
        {item.abbreviation ? item.state : item}
        <FontAwesomeIcon icon={faCaretDown} className="caret-down" />
      </div>
      {isOpen ? (
        <div className="dropdown-list-container">
          <ul>
            {list.map((item, index) => (
              <li key={index++} onClick={onOptionClicked(item)}>
                {item.abbreviation ? item.state : item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Dropdown;
