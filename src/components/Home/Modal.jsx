import "../../styles/components/Home/Modal.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Modal({ close }) {
  return (
    <div className="blocker" onClick={close}>
      <div id="confirmation" className="modal">
        <FontAwesomeIcon icon={faCircleCheck} className="circle-check" />
        <p>Employee Created !</p>
        <Link to="/" className="close-modal" onClick={close}>
          Close
        </Link>
      </div>
    </div>
  );
}

export default Modal;
