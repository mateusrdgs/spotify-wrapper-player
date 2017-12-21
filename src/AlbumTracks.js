/* eslint no-param-reassign: ["error", { "props": false }] */

function millisecondsToMinutes(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 10000).toFixed(0);
  return `${minutes}:${seconds < 10 ? 0 : ''}${seconds}`;
}

function createMarkup(data) {
  return data.map(music => `
      <div class="music">
        <p class="music-number">${music.track_number}.</p>
        <p class="music-title">${music.name}</p>
        <p class="music-duration">${millisecondsToMinutes(music.duration_ms)}</p>
      </div>`).join('');
}

export default function renderAlbumTracks(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
