/* eslint-env mocha, browser */

import 'jsdom-global/register';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import renderAlbumInfo from '../src/AlbumInfo';

chai.use(dirtyChai);

describe('AlbumInfo', () => {
  const data = {
    album_type: 'album',
    artists: [
      {
        name: 'Children of Bodom',
      },
    ],
    images: [
      {
        height: 364,
        url: 'https://i.scdn.co/image/52b9cda0a1a9ebc4cbf1caab406ace704650f7b8',
        width: 640,
      },
      {
        height: 297,
        url: 'https://i.scdn.co/image/6b9754c37d9be17c8b03a6437e1924c73b7d5a49',
        width: 300,
      },
      {
        height: 63,
        url: 'https://i.scdn.co/image/6b7d8799f7b63510ca9377955197ee6784d4bb6b',
        width: 64,
      },
    ],
    name: 'Are You Dead Yet?',
    id: '16eFDbMaEt4YfwSVpiRfD2',
    type: 'album',
    tracks: {
      total: 9,
    },
  };
  const markup = `
    <img class="album-image" src="https://i.scdn.co/image/52b9cda0a1a9ebc4cbf1caab406ace704650f7b8" alt="Are You Dead Yet?">
    <p class="album-title">Are You Dead Yet?</p>
    <p class="album-artist">Children of Bodom</p>
    <p class="album-counter">9 Músicas</p>
  `;
  it('should exists the renderAlbumInfo method', () => {
    expect(renderAlbumInfo).to.exist();
    expect(renderAlbumInfo).to.be.a('function');
  });
  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumInfo(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
  it('should return the parameter data', () => {
    const element = document.createElement('div');
    expect(renderAlbumInfo(data, element)).to.be.eql(data);
  });
});
