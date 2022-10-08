import React, { useState } from 'react';
import styles from '../styles/components/EventCard.module.css';
import { UpcomingEvents } from '../Constants/Constants';
import { CalendarIcon } from '@heroicons/react/outline';
import Button from './Button';
function EventCard() {
  const [attendee, setAttendee] = useState(false);
  return (
    <div className={styles['event-card']}>
        <h2 className={styles['header']}>Upcoming events</h2>
        <div>
          {UpcomingEvents.map(({eventId, eventHeader, eventDescription, eventDate, eventHost}) => <div key={eventId}>
            <h3 className={styles['event-header']}><CalendarIcon className={styles['icon-size']}/>{eventHeader}<span className={styles['event-date']}>{eventDate}</span></h3>
            <p className={styles['event-desc']}>{eventDescription}</p>
            <h4 className={styles['event-host']}><span className={styles['host-header']}>Host : </span>{eventHost}</h4>
            <Button text={attendee ? "✔️" : "Mark as attendee"} primary={true} onClick={()=>setAttendee(!attendee) }/>
          </div>)}
        </div>
    </div>
  )
}

export default EventCard