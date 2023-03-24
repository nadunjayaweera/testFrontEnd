import { useState } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const NotificationMessage = ({ notification }) => {
  return (
    <div>
      <p>{notification.message}</p>
    </div>
  );
};

const NotificationIcon = () => {
  const [notification, setNotification] = useState(null);
  const [open, setOpen] = useState(false);

  const handleNotificationClick = () => {
    setNotification({
      message: 'Dairy Milk Quantity Alert!',
      
      isRead: false
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="inherit">
        <Badge badgeContent={1} color="secondary">
          <NotificationsIcon onClick={handleNotificationClick} />
        </Badge>
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Notification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {notification && <NotificationMessage notification={notification} />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NotificationIcon;
