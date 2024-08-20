import axios from "axios";
import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then(( response ) => { setData(response.data.data)})
      .catch((error) => setError(error));
  }, [url]);


  return {error, data };
};


export default UseFetch;
