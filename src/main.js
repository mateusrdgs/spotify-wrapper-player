/* eslint-env browser */

import spotify from './Spotify';
import renderAlbums from './AlbumList';

const albums = spotify.search.albums('Metallica');
const albumList = document.getElementById('album-list');
albums
  .then((data) => {
    renderAlbums(data.albums.items, albumList);
  });
