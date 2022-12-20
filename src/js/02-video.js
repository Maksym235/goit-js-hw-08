import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  const localFiels = localStorage.getItem(TIME_KEY);
  if (localFiels === null) {
    return;
  }
  try {
    const paused = JSON.parse(localFiels);
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
resumePlayback();
