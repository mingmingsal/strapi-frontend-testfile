
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Homepage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:1337/api/reviews/")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
      })
      ;
  }, []);
  if (error) return <p>{error.message}</p>;
  if (!data) return <></>;
   return (
    <div>
      
    {data.map(({id,attributes}) => (

      <div key={id} className="review-card">

        <div className="rating">{attributes.Rating}</div>

        <h2>{attributes.title}</h2>
        <small>console list</small>

        <p>{attributes.Body ?  attributes.Body[0].children[0].text.substring(0, 200) : ""}...</p>
        <Link to={`/reviews/${id}`}>Read More</Link>
      </div>
    ))}
  </div>
  );
};

export default Homepage;
