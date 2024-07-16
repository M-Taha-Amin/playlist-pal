import { useContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { AppContext } from '../context/AppContextProvider';
import { Loading, Error } from './';
import calculateDuration from '../utils/calculateDuration';
import Filters from './Filters';

const PlaylistStats = () => {
  const { playlistID } = useContext(AppContext);
  const [data, isLoading, isError] = useFetch(playlistID);
  const [watched, setWatched] = useState(0);
  const remainingTime = data.slice(watched);
  const filterProps = { setWatched, dataSize: data.length };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <div className="container-md results-div fw-bold text-left fs-5">
      <Filters {...filterProps} />
      <p className="results-stat">
        No of Videos&nbsp;:&nbsp;&nbsp;
        <span className="text-warning">{data.length}</span>
      </p>
      <PlaylistStat label={'Total Time'} timestamps={data} />
      <PlaylistStat
        label={'Watched Time'}
        timestamps={data.slice(0, watched)}
      />
      <PlaylistStat label={'Remaining Time'} timestamps={remainingTime} />
      <PlaylistStat
        label={'At 1.25x speed'}
        timestamps={remainingTime}
        speed={1.25}
      />
      <PlaylistStat
        label={'At 1.5x speed'}
        timestamps={remainingTime}
        speed={1.5}
      />
    </div>
  );
};

const PlaylistStat = ({ label, timestamps, speed = undefined }) => {
  let duration = calculateDuration(timestamps, speed);

  return (
    <p className="results-stat">
      {label}&nbsp;:&nbsp;&nbsp;
      <span className="text-warning">
        {duration.hours && `${duration.hours}hrs`}&nbsp; {duration.minutes}
        min&nbsp;&nbsp;
        {duration.seconds}sec
      </span>
    </p>
  );
};

export default PlaylistStats;
