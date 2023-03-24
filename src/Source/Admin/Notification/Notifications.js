import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const NotificationMessage = ({ notification }) => {
  return (
    <div>
      <p>{notification.message}</p>
      <p>{notification.timestamp.toString()}</p>
    </div>
  );
};

const Notificationicon = () => {
  const [notification, setNotification] = useState(null);

  const handleNotificationClick = () => {
    setNotification({
      message: 'This is a dummy notification!',
      timestamp: new Date(),
      isRead: false
    });
  };

  return (
    <div>
      <IconButton color="inherit">
        <Badge badgeContent={2} color="secondary">
          <NotificationsIcon onClick={handleNotificationClick} />
        </Badge>
      </IconButton>
      {notification && <NotificationMessage notification={notification} />}
    </div>
  );
};

export default Notificationicon;
