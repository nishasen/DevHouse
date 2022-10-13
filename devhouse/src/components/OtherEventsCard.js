import React, {useState} from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button, IconButton } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styles from '../styles/components/EventCard.module.css';

function OtherEventsCard({event}) {
  const {eventId, eventDate, eventHost, eventHeader, eventDescription} = event;
  const [bookmark, setBookmark] = useState(false);
  const [registration, setRegistration] = useState(false);
  return (
    <div key={eventId} className={styles['card-box']}>
            <h3 className={styles['card-header']}>
              <CalendarMonthIcon color="primary"/>
              {eventHeader}
              <small className={styles['card-date']}>{eventDate}</small>
              <Button size="small" variant={registration ? "outlined" : "contained"} color="success">
                {registration ? "Attending ✔️" : "Register"}
              </Button>
              {bookmark ?
                <IconButton onClick={()=> setBookmark(false)} color="primary">
                  <BookmarkIcon />
                </IconButton> :
                <IconButton onClick={()=> setBookmark(true)} color="primary">
                  <BookmarkBorderIcon />
                </IconButton>}
            </h3>
            <p className={styles['card-desc']}>{eventDescription}</p>
            <h4 className={styles['card-host']}><span className={styles['host-span']}>Host : </span>{eventHost}</h4>
          </div>
  )
}

export default OtherEventsCard