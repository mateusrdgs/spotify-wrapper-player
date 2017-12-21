/* eslint-env browser */

import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';

const albums = spotify.search.albums('Children of Bodom');
const album = spotify.album.getAlbum('16eFDbMaEt4YfwSVpiRfD2');
const albumList = document.getElementById('album-list');
const albumInfo = document.getElementById('album-info');

albums
  .then((data) => {
    renderAlbums(data.albums.items, albumList);
  });

album
  .then((data) => {
    renderAlbumInfo(data, albumInfo);
  });
