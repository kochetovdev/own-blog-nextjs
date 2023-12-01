import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classes from './notification.module.css';
import { RequestStatus } from '@/types';

interface Props {
  requestError: string | null;
  requestStatus: RequestStatus;
}

function Notification({ requestError, requestStatus }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const notification = {
    pending: {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    },
    success: {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    },
    error: {
      status: 'error',
      title: 'Error!',
      message: requestError,
    },
  };

  let statusClasses = '';

  if (requestStatus && notification[requestStatus].status === 'success') {
    statusClasses = classes.success;
  }

  if (requestStatus && notification[requestStatus].status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  const targetElement = typeof document !== 'undefined' && document.getElementById('notifications');

  useEffect(() => {
    if (requestStatus && targetElement) {
      setIsVisible(true);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus, targetElement]);

  return (
    isVisible &&
    targetElement &&
    ReactDOM.createPortal(
      <div className={cssClasses}>
        {requestStatus && (
          <>
            <h2>{notification[requestStatus].title}</h2>
            <p>{notification[requestStatus].message}</p>
          </>
        )}
      </div>,
      targetElement
    )
  );
}

export default Notification;


