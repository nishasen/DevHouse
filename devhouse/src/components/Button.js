import React from 'react';
import styles from '../styles/components/Button.module.css';

function Button(props) {
  const {text, primary} = props;
  return (
    <button className={styles[primary ? 'primary-button' : 'secondary-button']} {...props}>
        {text}
    </button>
  )
}

export default Button