import { createContext, useState } from 'react';

export const AppContext = createContext({
  playlistID: '',
  setPlaylistID: () => {},
});

const AppContextProvider = ({ children }) => {
  const [playlistID, setPlaylistID] = useState('');

  return (
    <AppContext.Provider value={{ playlistID, setPlaylistID }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
