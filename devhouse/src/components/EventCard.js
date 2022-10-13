import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import styles from '../styles/components/EventCard.module.css';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { UpcomingEvents } from '../Constants/Constants';
import OtherEventsCard from './OtherEventsCard';
import OwnEventsCard from './OwnEventsCard';

function EventCard() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <TabList 
          variant="fullWidth" 
          value={value} 
          onChange={handleChange} 
          aria-label="Events card" 
          sx={{
                position: "sticky", 
                top: "6.5rem", 
                backgroundColor: "var(--bg-color)", 
                zIndex: "10"}}>
          <Tab label="Upcoming events" value="1"/>
          <Tab label="My events" value="2"/>
        </TabList>
        <TabPanel value="1" className={styles['event-card']}>
        {UpcomingEvents.map(event =>
          <OtherEventsCard event={event}/>
        )
        }
        </TabPanel>
        <TabPanel value="2" className={styles['event-card']}>
        {UpcomingEvents.map(event => 
          <OwnEventsCard event={event} />
        )
        }
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default EventCard