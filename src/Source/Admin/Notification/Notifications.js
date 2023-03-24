import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

function Notificationicon() {
    return (
        <div>
            <IconButton color="inherit">
                 <Badge badgeContent={2} color="secondary">
                     <NotificationsIcon />
                </Badge>
            </IconButton>
        </div>
    )
}

export default Notificationicon;