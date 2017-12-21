/* eslint-env mocha, browser */

import 'jsdom-global/register';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import renderAlbumTracks from '../src/AlbumTracks';

chai.use(dirtyChai);

describe('AlbumTracks', () => {
  const markup = `
    <div class="music">
      <p class="music-number">1.</p>
      <p class="music-title">Living Dead Beat</p>
      <p class="music-duration">5:18</p>
    </div>
    <div class="music">
      <p class="music-number">2.</p>
      <p class="music-title">Are You Dead Yet</p>
      <p class="music-duration">3:55</p>
    </div>
    <div class="music">
      <p class="music-number">3.</p>
      <p class="music-title">If You Want Peace... Prepare For War</p>
      <p class="music-duration">3:58</p>
    </div>
    <div class="music">
      <p class="music-number">4.</p>
      <p class="music-title">Punch Me I Bleed</p>
      <p class="music-duration">4:51</p>
    </div>
    <div class="music">
      <p class="music-number">5.</p>
      <p class="music-title">In Your Face</p>
      <p class="music-duration">4:16</p>
    </div>
    <div class="music">
      <p class="music-number">6.</p>
      <p class="music-title">Next In Line</p>
      <p class="music-duration">4:19</p>
    </div>
    <div class="music">
      <p class="music-number">7.</p>
      <p class="music-title">Bastards Of Bodom</p>
      <p class="music-duration">3:28</p>
    </div>
    <div class="music">
      <p class="music-number">8.</p>
      <p class="music-title">Trashed, Lost And Strungout</p>
      <p class="music-duration">4:02</p>
    </div>
    <div class="music">
      <p class="music-number">9.</p>
      <p class="music-title">We're Not Gonna Fall</p>
      <p class="music-duration">3:18</p>
    </div>
  `;
  const data = [
    {
      track_number: 1,
      name: 'Living Dead Beat',
      duration_ms: 318093,
    },
    {
      track_number: 2,
      name: 'Are You Dead Yet',
      duration_ms: 234880,
    },
    {
      track_number: 3,
      name: 'If You Want Peace... Prepare For War',
      duration_ms: 237640,
    },
    {
      track_number: 4,
      name: 'Punch Me I Bleed',
      duration_ms: 291106,
    },
    {
      track_number: 5,
      name: 'In Your Face',
      duration_ms: 255973,
    },
    {
      track_number: 6,
      name: 'Next In Line',
      duration_ms: 259041,
    },
    {
      track_number: 7,
      name: 'Bastards Of Bodom',
      duration_ms: 207840,
    },
    {
      track_number: 8,
      name: 'Trashed, Lost And Strungout',
      duration_ms: 241640,
    },
    {
      track_number: 9,
      name: 'We\'re Not Gonna Fall',
      duration_ms: 197640,
    },
  ];
  it('should exists the renderAlbumTracks method', () => {
    expect(renderAlbumTracks).to.exist();
    expect(renderAlbumTracks).to.be.a('function');
  });
  it('should render the correct markup given the correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
});

