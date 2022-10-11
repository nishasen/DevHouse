import React from 'react';
import styles from '../styles/components/PageHeader.module.css';

function PageHeader({header}) {
  return (
    <div className={styles['page-header']}>{header}</div>
  )
}

export default PageHeader