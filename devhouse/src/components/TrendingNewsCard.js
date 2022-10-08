import React from 'react';
import styles from '../styles/components/TrendingNewsCard.module.css';
import { TrendingNews } from '../Constants/Constants';
import Button from './Button';
function TrendingNewsCard() {
  return (
    <div className={styles['trending-card']}>
        <h2 className={styles['header']}>Trending news</h2>
        <div>
          {TrendingNews.map(({newsId, newsHeader, newsDescription})=> 
          <div key={newsId}>
            <h3 className={styles['news-header']}>#{newsHeader}</h3>
            <p className={styles['news-desc']}>{newsDescription}</p>
            <Button text={"Schedule event"} primary={true} />
          </div>)}
        </div>
    </div>
  )
}

export default TrendingNewsCard