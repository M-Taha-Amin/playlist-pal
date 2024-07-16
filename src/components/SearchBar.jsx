import { useContext } from 'react';
import { useRef } from 'react';
import { AppContext } from '../context/AppContextProvider';
import parseIdFromURL from '../utils/parseIdFromUrl';

const SearchBar = () => {
  const { setPlaylistID } = useContext(AppContext);
  const searchBarRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const url = searchBarRef.current.value;
    if (url === '') {
      setPlaylistID('');
      return;
    }
    const parsedID = parseIdFromURL(url);
    searchBarRef.current.value = '';
    setPlaylistID(parsedID);
  };

  return (
    <form className="mt-5" onSubmit={handleSubmit}>
      <div className="container-md">
        <div className="d-flex flex-column flex-md-row searchbar">
          <input
            type="text"
            className="form-control shadow-none rounded-3"
            placeholder="https://www.youtube.com/playlist?list=PlaylistID"
            ref={searchBarRef}
          />
          <button
            className="btn btn-outline-primary shadow-none w-auto ms-md-3 calculate-btn rounded-3"
            type="submit">
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
