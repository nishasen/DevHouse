import React from 'react';
import { useDev } from '../Context';
import styles from '../styles/components/DevInfo.module.css';

function DevInfo() {
    const { showDevInfo, devDetails } = useDev();
    const { avatar, username, email, designation, bio } = devDetails;
  return (
    <>
        {showDevInfo && <div className={styles['devinfo-card']}>
            <img src={avatar} alt="user avatar" className={styles['dev-avatar']}/>
            <h3><span className={styles['dev-details']}>Username:</span> {username}</h3>
            <h3><span className={styles['dev-details']}>Email:</span> {email}</h3>
            <h3><span className={styles['dev-details']}>Designation:</span> {designation}</h3>
            <h3><span className={styles['dev-details']}>Bio:</span> {bio}</h3>
        </div>}
    </>
  )
}

export default DevInfo