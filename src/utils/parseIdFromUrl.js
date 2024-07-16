const parseIdFromURL = url => {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    const playlistId = params.get('list');
    if (playlistId === null) return undefined;
    else return playlistId;
  } catch (error) {
    return undefined;
  }
};

export default parseIdFromURL;
