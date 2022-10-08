import styles from '../styles/pages/Dashboard.module.css';

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SpaceCard from '../components/SpaceCard';
import TrendingNewsCard from '../components/TrendingNewsCard';
import EventCard from '../components/EventCard';
import DevInfo from '../components/DevInfo';

const Dashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>

      <div className={styles['dashboard-layout']}>
        <div className={styles['column-layout']}>
          <SpaceCard />
          <DevInfo />
        </div>
        <TrendingNewsCard />
        <EventCard />
      </div>
    </>
  );
};

export default Dashboard;
