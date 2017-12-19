/* eslint-env mocha */

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
      id: '6peEdPV073WtgGah5sEhX4',
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
      type: 'album',
    },
  ];
});
