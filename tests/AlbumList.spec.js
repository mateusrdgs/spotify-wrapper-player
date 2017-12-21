/* eslint-env mocha, browser */

import 'jsdom-global/register';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import renderAlbums from '../src/AlbumList';

chai.use(dirtyChai);

describe('AlbumList', () => {
  it('should exists renderAlbum method', () => {
    expect(renderAlbums).to.exist();
  });
  const data = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Full Of Hell',
        },
      ],
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/e50b66080689fe490f3f63d87fe7969786b61837',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/bfaaa13618e51bc0358ea3053b8bfc833b930baf',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/be67ab09173583c786f5d34ee113db83e4429f6c',
          width: 64,
        },
      ],
      name: 'Trumpeting Ecstasy',
      id: '1CICQQAxvXbayxDF5jJETJ',
      type: 'album',
    },
  ];
  const data2 = [
    {
      album_type: 'album',
      artists: [
        {
          name: 'Onslaught',
        },
      ],
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/3ac768c94893667c1c6e587e9f9599117ba397f1',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/9a63fd5dcce51b32d42eb24fbb4c976d3fadcf79',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/3f6088fbfba080eac1cf71115034a1e9f2d4c4a1',
          width: 64,
        },
      ],
      name: 'Sounds of Violence',
      id: '71lhIVHJ24x9hEcwFSWuOf',
      type: 'album',
    },
    {
      album_type: 'album',
      artists: [
        {
          name: 'Municipal Waste',
        },
      ],
      images: [
        {
          height: 640,
          url: 'https://i.scdn.co/image/9cb9768d302839dbfd57da556d9988e5227dd121',
          width: 640,
        },
        {
          height: 300,
          url: 'https://i.scdn.co/image/527e03986448c188bd9565ca05f072d3f57916b8',
          width: 300,
        },
        {
          height: 64,
          url: 'https://i.scdn.co/image/30e172286c04d4c6a60e424cea2ff791ab9e5026',
          width: 64,
        },
      ],
      name: 'The Art of Partying',
      id: '7cU3FZ3u2jgKd5s8hhKJ9h',
      type: 'album',
    },
  ];
  const markup = `
    <div class="list-item" data-album-id="${data[0].id}">
      <img src="${data[0].images[2].url}" alt="${data[0].name}" class="list-image" data-album-id="${data[0].id}">
      <div class="list-description" data-album-id="${data[0].id}">
        <p class="list-title" data-album-id="${data[0].id}">${data[0].name}</p>
        <p class="list-subtitle" data-album-id="${data[0].id}">${data[0].artists[0].name}</p>
      </div>
    </div>`;
  const markup2 = `
    <div class="list-item" data-album-id="${data2[0].id}">
      <img src="${data2[0].images[2].url}" alt="${data2[0].name}" class="list-image" data-album-id="${data2[0].id}">
      <div class="list-description" data-album-id="${data2[0].id}">
        <p class="list-title" data-album-id="${data2[0].id}">${data2[0].name}</p>
        <p class="list-subtitle" data-album-id="${data2[0].id}">${data2[0].artists[0].name}</p>
      </div>
    </div>
    <div class="list-item" data-album-id="${data2[1].id}">
      <img src="${data2[1].images[2].url}" alt="${data2[1].name}" class="list-image" data-album-id="${data2[1].id}">
      <div class="list-description" data-album-id="${data2[1].id}">
        <p class="list-title" data-album-id="${data2[1].id}">${data2[1].name}</p>
        <p class="list-subtitle" data-album-id="${data2[1].id}">${data2[1].artists[0].name}</p>
      </div>
    </div>`;
  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbums(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
  it('should create and append when more than 1 album', () => {
    const element2 = document.createElement('div');
    renderAlbums(data2, element2);
    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
