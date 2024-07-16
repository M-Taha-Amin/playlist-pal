import { Duration } from 'luxon';

const calculateDuration = (timestamps, speed = 1) => {
  let totalSeconds = timestamps
    .map(time => {
      return Duration.fromISO(time).as('seconds');
    })
    .reduce((acc, curr) => acc + curr, 0);
  if (speed) {
    totalSeconds = totalSeconds / speed;
  }
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);
  let result = {};
  if (hours === 0) {
    result = { minutes, seconds };
  } else {
    result = { hours, minutes, seconds };
  }
  return result;
};

export default calculateDuration;
