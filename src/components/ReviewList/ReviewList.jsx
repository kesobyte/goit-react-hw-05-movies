import React from 'react';
import PropTypes from 'prop-types';
import css from './ReviewList.module.css';

const ReviewList = ({ reviews }) => {
  if (reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul className={css.reviewList}>
      {reviews.map(review => (
        <li key={review.id} className={css.reviewListItem}>
          <h3 className={css.author}>{review.author}</h3>
          <p className={css.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewList;
