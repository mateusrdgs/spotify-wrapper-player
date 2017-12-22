/* eslint no-param-reassign: ["error", { "props": false }] */

import convertToHumanTime from './ConvertToHumanTime';

function createMarkup(data) {
  return data.map(music => `
    <div class="music" data-track-preview="${music.preview_url}">
      <p class="music-number">${music.track_number}</p>
      <p class="music-title">${music.name}</p>
      <p class="music-duration">${convertToHumanTime(music.duration_ms)}</p>
    </div>`).join('');
}

export default function renderAlbumTracks(data, element) {
  const markup = createMarkup(data);
  element.innerHTML = markup;
}
