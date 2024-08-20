import { useEffect, useState } from 'react';

const API_BASE_URL = 'https://playlist-pal-api.vercel.app/api';

const useFetch = playlistId => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await fetch(`${API_BASE_URL}/api/playlist/duration`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            apiKey: import.meta.env.VITE_API_KEY,
            playlistId,
          }),
        });
        const data = await res.json();
        setData(data);
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
