import React from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from '@mui/material';
import styles from '../styles/components/EventCard.module.css';

function OwnEventsCard({event}) {
  const {eventId, eventDate, eventHeader, eventDescription} = event;
  return (
    <div key={eventId} className={styles['card-box']}>
      <h3 className={styles['card-header']}>
        <CalendarMonthIcon color="primary"/>
        {eventHeader}
        <small className={styles['card-date']}>{eventDate}</small>
        <Button variant='outlined' size="small" color="secondary">Start</Button>
      </h3>
      <p className={styles['card-desc']}>{eventDescription}</p>
    </div>
  )
}

export default OwnEventsCard