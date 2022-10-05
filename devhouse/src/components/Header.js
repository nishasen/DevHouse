import React from 'react';
import styles from '../styles/components/Header.module.css';

function Header({fontsize}) {
  return (
    <div>
        <h2 className={styles['header']} style={{fontSize: fontsize}}>Dev<span className={styles['header-span']}>House</span></h2>
    </div>
  )
}

export default Header