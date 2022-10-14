import styles from '../styles/pages/Profile.module.css';

import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useOutletContext } from 'react-router-dom';
import Input from '../components/Input';
import PageHeader from '../components/PageHeader';
import { Avatars } from '../Constants/Constants';

const Profile = () => {
  const { user } = useOutletContext();

  const [firstName, setFirstName] = useState(user?.metadata?.firstName ?? '');
  const [lastName, setLastName] = useState(user?.metadata?.lastName ?? '');

  const isFirstNameDirty = firstName !== user?.metadata?.firstName;
  const isLastNameDirty = lastName !== user?.metadata?.lastName;
  const isProfileFormDirty = isFirstNameDirty || isLastNameDirty;

  const updateUserProfile = async e => {
    e.preventDefault();
  };

  const selectedAvatarId = 1;

  return (
    <>
      <Helmet>
        <title>Profile - DevHouse</title>
      </Helmet>

      <div>
        <PageHeader header="Profile" />
        <div className={styles.info}>
          <p>Update your personal information.</p>
        </div>

        <div className={styles.card}>
          <form onSubmit={updateUserProfile} className={styles.form}>
            <div className={styles['form-fields']}>
              <div className={styles['form-avatars']}>
                <div className={styles.label}>
                  <p>Avatar</p>
                </div>
                <div className={styles['avatar-box']}>
                  {Avatars.map(({avatarId, avatarImg})=> <div key={avatarId} className={styles['avatar-wrapper']}>
                    <img src={avatarImg} alt="Avatar" className={`${"profile profile-md-round"} ${selectedAvatarId===avatarId ? styles["selected-avatar"] : styles["avatar-image"]} `}/>
                  </div>)}
                </div>
              </div>
              <div className={styles['input-group']}>
                <Input
                  type="text"
                  label="First name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
                <Input
                  type="text"
                  label="Last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
              <Input
                  type="text"
                  label="Designation"
                  value={user?.designation}
                />
              <Input
                  type="text"
                  label="Bio"
                  value={user?.bio}
                />
              <div className={styles['input-email-wrapper']}>
                <Input
                  type="email"
                  label="Email address"
                  value={user?.email}
                  readOnly
                />
              </div>
            </div>

            <div className={styles['form-footer']}>
              <button
                type="submit"
                disabled={!isProfileFormDirty}
                className={styles.button}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
