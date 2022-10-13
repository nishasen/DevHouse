import React from 'react';
import styles from '../styles/components/TrendingNewsCard.module.css';
import { TrendingNews } from '../Constants/Constants';
import { Button } from '@mui/material';
function TrendingNewsCard() {
  return (
    <div>
        <h2 className={styles['header']}>Trending news</h2>
        <div className={styles['trending-card']}>
          {TrendingNews.map(({newsId, newsHeader, newsDescription})=> 
          <div key={newsId} className={styles['news-box']}>
            <h3 className={styles['news-header']}>
              <span className={styles['header-span']}>#</span>
              {newsHeader}
            </h3>
            <p className={styles['news-desc']}>{newsDescription}</p>
            <div className={styles['read-more']}>
              <Button variant='outlined' color="warning" size="small">Read more</Button>
            </div>
          </div>)}
        </div>
    </div>
  )
}

export default TrendingNewsCard