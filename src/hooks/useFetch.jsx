import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = playlistId => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL, {
          params: {
            apiKey: import.meta.env.VITE_API_KEY,
            playlistId,
          },
        });
        setData(res.data);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (playlistId) {
      fetchData();
    } else {
      setData([]);
      setIsLoading(false);
    }
  }, [playlistId]);

  return [data, isLoading, isError];
};

export default useFetch;
