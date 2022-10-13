import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import styles from '../styles/components/EventCard.module.css';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { UpcomingEvents } from '../Constants/Constants';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from '@mui/material';

function EventCard() {
  const [value, setValue] = useState("1");
  const [registration, setRegistration] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <TabList variant="fullWidth" value={value} onChange={handleChange} aria-label="Events card" sx={{position: "sticky", top: "6.5rem", backgroundColor: "var(--bg-color)", zIndex: "10"}}>
          <Tab label="Upcoming events" value="1"/>
          <Tab label="My events" value="2"/>
        </TabList>
        <TabPanel value="1" className={styles['event-card']}>
        {UpcomingEvents.map(({eventId, eventDate, eventHost, eventHeader, eventDescription}) => 
          <div key={eventId} className={styles['card-box']}>
            <h3 className={styles['card-header']}>
              <CalendarMonthIcon color="primary"/>
              {eventHeader}
              <small className={styles['card-date']}>{eventDate}</small>
              <Button size="small" variant={registration ? "outlined" : "contained"} color="success">{registration ? "Attending ✔️" : "Register"}</Button>
            </h3>
            <p className={styles['card-desc']}>{eventDescription}</p>
            <h4 className={styles['card-host']}><span className={styles['host-span']}>Host : </span>{eventHost}</h4>
            
          </div>
        )
        }
        </TabPanel>
        <TabPanel value="2" className={styles['event-card']}>
        {UpcomingEvents.map(({eventId, eventDate, eventHeader, eventDescription}) => 
          <div key={eventId} className={styles['card-box']}>
            <h3 className={styles['card-header']}>
              <CalendarMonthIcon color="primary"/>
              {eventHeader}
              <small className={styles['card-date']}>{eventDate}</small>
              <Button variant='outlined' size="small">Start</Button>
            </h3>
            <p className={styles['card-desc']}>{eventDescription}</p>
          </div>
        )
        }
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default EventCard