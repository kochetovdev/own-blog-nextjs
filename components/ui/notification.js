import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

import classes from "./notification.module.css";

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const [portalRoot, setPortalRoot] = useState(null);

  useEffect(() => {
    const existingPortalRoot = document.getElementById("notifications");
    if (existingPortalRoot) {
      setPortalRoot(existingPortalRoot);
    } else {
      const newPortalRoot = document.createElement("div");
      newPortalRoot.id = "notifications";
      document.body.appendChild(newPortalRoot);
      setPortalRoot(newPortalRoot);
    }
  }, []);

  return portalRoot
    ? ReactDOM.createPortal(
        <div className={cssClasses}>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>,
        portalRoot
      )
    : null;
}

export default Notification;
