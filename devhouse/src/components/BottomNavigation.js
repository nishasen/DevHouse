import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import IconButton from '@mui/material/IconButton';
import styles from '../styles/components/BottomNavigation.module.css';

function BottomNavigation() {
  return (
    <div className={styles["bottom-navigation"]}>
        <IconButton color="primary" aria-label="events">
            <CalendarMonthRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="explore">
            <ExploreRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="notification">
            <NotificationsRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="bookmark">
            <BookmarkRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="profile">
            <PersonRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="rooms">
            <HomeRoundedIcon />
        </IconButton>
        <IconButton color="primary" aria-label="users">
            <PeopleAltRoundedIcon />
        </IconButton>
    </div>
    
  )
}

export default BottomNavigation