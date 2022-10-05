import styles from '../styles/pages/Dashboard.module.css';

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Dashboard - Nhost</title>
      </Helmet>

      <div>
        <div className={styles['dashboard-card']}>
          
        </div>
      </div>
    </>
  );
};

export default Dashboard;
