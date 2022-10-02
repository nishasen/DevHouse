import styles from '../styles/components/SignUp.module.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');
  const [username, setUsername] = useState('');
  const [designation, setDesignation] = useState('');
  const [bio, setBio] = useState('');

  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles['logo-wrapper']}>
          <img src={process.env.PUBLIC_URL + 'logo.svg'} alt="logo" />
        </div>

        <form onSubmit={handleOnSubmit} className={styles.form}>
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

          <button type="submit" className={styles.button}>
            Create account
          </button>
        </form>
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
