import styles from '../styles/pages/Rooms.module.css';

import { useOutletContext } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PageHeader from '../components/PageHeader';

const Rooms = () => {
  const { user } = useOutletContext();

  return (
    <>
      <Helmet>
        <title>Rooms - Nhost</title>
      </Helmet>

      <div><PageHeader header="Rooms" /></div>
    </>
  );
};

export default Rooms;
