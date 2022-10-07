import React from 'react';
import styles from '../styles/components/SpaceCard.module.css';
import {Avatars} from '../Constants/Constants';

function SpaceCard() {
  return (
    <div className={styles['space-card']}>
      <h2>Active people</h2>
      <div className={styles['avatar-box']}>
        {Avatars.map(({avatarId, avatarName})=> <div key={avatarId} className={styles['avatar-wrapper']}>
            <img src={avatarName} className={styles['space-avatars']}/>
        </div>)}
      </div>
    </div>
  )
}

export default SpaceCard