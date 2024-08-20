import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const ReviewDetails = () => {
  const [review, setReview] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/reviews/${id}`)
      .then(({data}) => {
        setReview(data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return <p>{error.message}</p>;
  if (review === undefined || review===null || review.length ==0) return <p>Loading...</p>
  else (console.log(review))
  return (
    <>
      {review && (
        <div className="review-card">
          <div className="rating">{review.attributes.Rating}</div>

          <h2>{review.attributes.title}</h2>
          <small>console list</small>
          <ul>

          </ul>
          {review.attributes.Body && review.attributes.Body.map((part, index)=>(
            <li key={index}>{part.children[0].text}</li>
          )
          )}
        </div>
      )}
    </>
  );
};

export default ReviewDetails;
