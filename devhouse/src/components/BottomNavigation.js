import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';
import styles from '../styles/components/BottomNavigation.module.css';

function BottomNavigation() {
  return (
    <div className={styles["bottom-navigation"]}>
        <IconButton component={NavLink} to="/events" color="primary" aria-label="events">
            <CalendarMonthRoundedIcon />
        </IconButton>
        <IconButton component={NavLink} to="/explore" color="primary" aria-label="explore">
            <ExploreRoundedIcon />
        </IconButton>
        <IconButton component={NavLink} to="/notification" color="primary" aria-label="notification">
            <NotificationsRoundedIcon />
        </IconButton>
        <IconButton component={NavLink} to="/bookmark" color="primary" aria-label="bookmark">
            <BookmarkRoundedIcon />
        </IconButton>
        <IconButton component={NavLink} to="/profile" color="primary" aria-label="profile">
            <PersonRoundedIcon />
        </IconButton>
        <IconButton component={NavLink} to="/rooms" color="primary" aria-label="rooms">
            <HomeRoundedIcon />
        </IconButton>
        <IconButton component={NavLink} to="/users" color="primary" aria-label="users">
            <PeopleAltRoundedIcon />
        </IconButton>
    </div>
    
  )
}

export default BottomNavigation