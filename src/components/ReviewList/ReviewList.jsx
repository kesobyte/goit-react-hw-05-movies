import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/tmdb-api';
import { Loader } from 'components/Loader/Loader';
import css from './ReviewList.module.css';

const ReviewList = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        setReviews(reviewsData || []);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

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

export default ReviewList;
