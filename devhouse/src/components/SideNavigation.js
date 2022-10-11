import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { Chip } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/SideNavigation.module.css';

const SideNavigation = () => {
    const getActiveStyles = ({isActive}) =>
        isActive ? {
            color: "var(--white)",
            backgroundColor: "var(--primary)"
        } : {}    
    
  return (
    <div className={styles["side-navigation"]}>
        <div className={styles["side-buttons"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/events"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<CalendarMonthRoundedIcon />}
                label="EVENTS">
            </Chip>
        </div>
        <div className={styles["side-buttons"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/explore"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<ExploreRoundedIcon />}
                label="EXPLORE">
            </Chip>  
        </div>
        <div className={styles["side-buttons"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/notification"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<NotificationsRoundedIcon />}
                label="NOTIFICATIONS">
            </Chip>
        </div>
        <div className={styles["side-buttons"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/bookmark"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<BookmarkRoundedIcon />}
                label="BOOKMARK">        
            </Chip>
        </div>
        <div className={styles["side-buttons"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/profile"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<PersonRoundedIcon />}
                label="PROFILE">
            </Chip>
        </div>
        <div className={styles["side-buttons"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/rooms"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<HomeRoundedIcon />}
                label="ROOMS">
            </Chip>  
        </div>
        <div className={styles["side-users-button"]}>
            <Chip 
                component={NavLink}
                clickable
                sx={{width: "10rem", display: "flex", justifyContent: "flex-start"}}
                to="/users"
                style={getActiveStyles}
                variant="outlined"
                color="primary" 
                icon={<PeopleAltRoundedIcon />}
                label="USERS">
            </Chip>  
        </div>
    </div>
  )
}

export default SideNavigation;