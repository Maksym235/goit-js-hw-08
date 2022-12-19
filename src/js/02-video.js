import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const TIME_KEY = 'videoplayer-current-time';

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, data);
};

player.on('timeupdate', throttle(onPlay, 1000));

const localFiels = localStorage.getItem(TIME_KEY);

function resumePlayback() {
  try {
    JSON.parse(localFiels);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  const paused = JSON.parse(localFiels);
  if (paused) {
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
  }
}
resumePlayback();
