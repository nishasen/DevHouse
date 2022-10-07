import React from 'react';
import styles from '../styles/components/Button.module.css';

function Button({text, primary}) {
  return (
    <button className={styles[primary ? 'primary-button' : 'secondary-button']}>
        {text}
    </button>
  )
}

export default Button