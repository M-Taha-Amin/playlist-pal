import { useContext } from 'react';
import { AppContext } from '../context/AppContextProvider';
import { Error, PlaylistStats, Warning } from './';

const SearchResults = () => {
  const { playlistID } = useContext(AppContext);

  if (playlistID === '') {
    return <Warning />;
  }

  if (playlistID === undefined) {
    return <Error />;
  }

  return <PlaylistStats />;
};

export default SearchResults;
