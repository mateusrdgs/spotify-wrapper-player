/* eslint-env browser */

import spotify from './Spotify';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');
const albumTracks = document.getElementById('album-tracks');

export default function selectAlbumTrigger() {
  albumList.addEventListener('click', (e) => {
    const { target } = e;
    const { dataset } = target;
    const { albumId } = dataset;
    if (albumId) {
      spotify.album.getAlbum(albumId)
        .then(data => renderAlbumInfo(data, albumInfo))
        .then(data => renderAlbumTracks(data.tracks.items, albumTracks));
    }
  });
}
