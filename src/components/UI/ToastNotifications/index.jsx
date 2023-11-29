import ReactDOM from "react-dom";
import { Toast, ToastContainer } from "react-bootstrap";
import "./index.css";

const ToastNotif = ({ header, body, open }) => {
  return (
    <ToastContainer
      className="p-3"
      position="top-center"
      style={{ zIndex: 1003 }}
    >
      <Toast show={open}>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">{header}</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{body}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

const ToastNotification = ({ open }) => {
  return ReactDOM.createPortal(
    <ToastNotif open={open} />,
    document.getElementById("toast-root") // Use the correct ID here
  );
};

export default ToastNotification;
