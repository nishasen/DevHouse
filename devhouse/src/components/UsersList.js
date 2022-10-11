import React, {useState} from 'react'
import { Avatars } from '../Constants/Constants';
import styles from '../styles/components/UsersList.module.css';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function UsersList() {
  const TrimAvatar = Avatars?.length > 5 ? Avatars.slice(0, 5) : Avatars;
  const [inviteUser, setInviteUser] = useState(false);
  const [invitationAccepted, setInvitationAccepted] = useState(false);
  const userStatus = "green";
  return (
    <div className={styles['user-wrapper']}>
      <input type="search" placeholder="Search people..." className={styles["search"]}/>
      <h3 className={styles['suggestions']}>Users <Button color="error" endIcon={<ArrowForwardIosIcon />}>Show more</Button></h3>
      {TrimAvatar.map(({avatarImg, username})=> <div className={styles['user-list']}>
        <div className={styles['user-details']}>
          <div className={styles["user-profile"]}>
            <img src={avatarImg} alt="users" className='profile profile-md-round'/>
            <div className={styles["user-status"]} style={{backgroundColor: userStatus}}></div>
          </div>
          <h4 className={styles['username']}>{username}</h4>
        </div>
        <Button variant={inviteUser ? "outlined" : "contained"} disabled={invitationAccepted} onClick={()=> setInviteUser(!inviteUser)}>{inviteUser ? invitationAccepted ? "Accepted" : "Requested" : "Invite"}</Button>
      </div>)}
    </div>
  )
}

export default UsersList