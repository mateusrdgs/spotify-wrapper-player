/* eslint-env mocha */

import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import spotify from '../src/Spotify';

chai.use(dirtyChai);

describe('Spotify', () => {
  it('should to be an object', () => {
    expect(spotify).to.be.an('object');
  });
  it('should have search methods', () => {
    expect(spotify.search).to.exist();
  });
  it('should have album methods', () => {
    expect(spotify.album).to.exist();
  });
});
