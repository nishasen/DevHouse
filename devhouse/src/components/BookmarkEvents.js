import React from 'react';
import { UpcomingEvents } from '../Constants/Constants';
import styles from '../styles/components/EventCard.module.css';
import OtherEventsCard from './OtherEventsCard';

function BookmarkEvents() {
  return (
    <div className={styles['event-card']}>
        {UpcomingEvents.map(event =>
          <OtherEventsCard event={event}/>
        )}
    </div>
  )
}

export default BookmarkEvents