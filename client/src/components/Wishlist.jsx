import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/styles.css';

const Wishlist = ({ liked, updater }) => (
  <div>
    <button type="button" className={styles.wishlist} onClick={updater}>
      <div className={styles.circle}>
        { liked === 1 && (
        <svg width="100%" height="100%" viewBox="0 0 40 40" alt="">
          <rect fill="#F8F8F8" width="40" height="40" rx="20" />
          <path d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7" />
        </svg>
        )}
        { liked === 0 && (
        <svg width="100%" height="100%" viewBox="0 0 40 40" alt="">
          <rect fill="#F8F8F8" width="40" height="40" rx="20" />
          <path d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#F8F8F8" />
          <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7" />
        </svg>
        )}
      </div>
      <div className={styles.wishlistText}>Add to Wishlist</div>
    </button>
  </div>
);

Wishlist.defaultProps = {
  liked: PropTypes.number,
};

export default Wishlist;
