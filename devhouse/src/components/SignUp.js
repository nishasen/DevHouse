import styles from '../styles/components/SignUp.module.css';
import { useState } from 'react';
import { useSignUpEmailPassword } from '@nhost/react';
import { Link, Navigate } from 'react-router-dom';
import Input from './Input';
import Spinner from './Spinner';
import Header from './Header';
import { Avatars } from '../Constants/Constants';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [designation, setDesignation] = useState('');
  const [bio, setBio] = useState('');

  const { signUpEmailPassword, isLoading, isSuccess, needsEmailVerification, isError, error } =
  useSignUpEmailPassword()

const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log(e)

  signUpEmailPassword(email, password, {
    displayName: `${firstName} ${lastName}`.trim(),
    metadata:{
      username,
      firstName,
      lastName,
      bio
    }
  })
};

if (isSuccess) {
  return <Navigate to="/" replace={true} />
}

const disableForm = isLoading || needsEmailVerification



  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <Header fontsize={'3rem'}/>
        </div>
        {needsEmailVerification ? (
          <p className={styles['verification-text']}>
            Please check your mailbox and follow the verification link to verify your email.
          </p>
        ) : (
        <form onSubmit={handleOnSubmit} className={styles.form}>
          <div className={styles['avatar-box']}>
            {Avatars.map(({avatarId, avatarImg}) => <div key={avatarId} className={styles['avatar-wrapper']}>
              <img src={avatarImg} className={styles['avatar-img']}/>
            </div> )}
          </div>
          <div className={styles['input-group']}>
            <Input
              label="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
            <Input
              label="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
          <Input
            type="text"
            label="User name"
            placeholder="What should people call you?"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
          <Input
            type="text"
            label="Designation"
            placeholder="Who are you?"
            value={designation}
            onChange={e => setDesignation(e.target.value)}
            required
          />
          <Input
            type="text"
            label="Bio"
            placeholder="Something about yourself!!"
            value={bio}
            onChange={e => setBio(e.target.value)}
            required
          />
          <Input
            type="email"
            label="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            label="Create password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button type="submit" disabled={disableForm} className={styles.button}>
              {isLoading ? <Spinner size="sm" /> : 'Create account'}
          </button>

          {isError ? <p className={styles['error-text']}>{error?.message}</p> : null}
        </form>
        )}
      </div>

      <p className={styles.text}>
        Already have an account?{' '}
        <Link to="/sign-in" className={styles.link}>
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
