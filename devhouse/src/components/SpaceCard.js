import React from 'react';
import styles from '../styles/components/SpaceCard.module.css';
import {Avatars} from '../Constants/Constants';
import { useDev } from '../Context';

function SpaceCard() {
  const { setShowDevInfo, setDevDetails, devDetails } = useDev();
  return (
    <div className={styles['space-card']}>
      <h2 className={styles['header']}>Active devs</h2>
      <div className={styles['avatar-box']}>
        {Avatars.map(({avatarId, avatarImg, username, email, designation, bio})=> 
        <div  key={avatarId} 
              className={styles['avatar-wrapper']} onClick={()=>{
                                              setShowDevInfo(true)
                                              setDevDetails({
                                                avatar: avatarImg,
                                                username: username,
                                                email: email,
                                                designation: designation,
                                                bio: bio
                                              })}}>
            <img src={avatarImg} className={styles["space-avatars"]} style={{border: devDetails.avatar===avatarImg ? `2.5px solid var(--primary)` : `1px solid var(--primary)`}}/>
        </div>)}
      </div>
    </div>
  )
}

export default SpaceCard