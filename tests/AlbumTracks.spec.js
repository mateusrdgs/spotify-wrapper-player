/* eslint-env mocha, browser */

import 'jsdom-global/register';
import chai, { expect } from 'chai';
import dirtyChai from 'dirty-chai';
import renderAlbumTracks from '../src/AlbumTracks';

chai.use(dirtyChai);

describe('AlbumTracks', () => {
  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/540708a2bee194bab434a28b34f8514444062801?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">1</p>
      <p class="music-title">Living Dead Beat</p>
      <p class="music-duration">5:18</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/e5872f44f7ee356c603a51dcd985016023f5da4a?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">2</p>
      <p class="music-title">Are You Dead Yet</p>
      <p class="music-duration">3:55</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/bb95153fd029e8609195d408e9675ba578c55a07?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">3</p>
      <p class="music-title">If You Want Peace... Prepare For War</p>
      <p class="music-duration">3:58</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/5c9f51d65bfeb63ca6b4fef15590d644c312c985?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">4</p>
      <p class="music-title">Punch Me I Bleed</p>
      <p class="music-duration">4:51</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/ee05dad2ba592e84e4b57288be505d568c4dfc57?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">5</p>
      <p class="music-title">In Your Face</p>
      <p class="music-duration">4:16</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/a3cb905645cd2b81687d4a1c59fe3b607413173c?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">6</p>
      <p class="music-title">Next In Line</p>
      <p class="music-duration">4:19</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/e8fd94c15c2a364fd64e71701f12ed2305e2c6ca?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">7</p>
      <p class="music-title">Bastards Of Bodom</p>
      <p class="music-duration">3:28</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/84a4c63d45e23e0d4fb33c9f24d96382d3e52da8?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">8</p>
      <p class="music-title">Trashed, Lost And Strungout</p>
      <p class="music-duration">4:02</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/64225195a12022fd2a43f6f8a4c9487a86ecf1eb?cid=8897482848704f2a8f8d7c79726a70d4">
      <p class="music-number">9</p>
      <p class="music-title">We're Not Gonna Fall</p>
      <p class="music-duration">3:18</p>
    </div>`;
  const data = [
    {
      track_number: 1,
      name: 'Living Dead Beat',
      duration_ms: 318093,
      preview_url: 'https://p.scdn.co/mp3-preview/540708a2bee194bab434a28b34f8514444062801?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 2,
      name: 'Are You Dead Yet',
      duration_ms: 234880,
      preview_url: 'https://p.scdn.co/mp3-preview/e5872f44f7ee356c603a51dcd985016023f5da4a?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 3,
      name: 'If You Want Peace... Prepare For War',
      duration_ms: 237640,
      preview_url: 'https://p.scdn.co/mp3-preview/bb95153fd029e8609195d408e9675ba578c55a07?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 4,
      name: 'Punch Me I Bleed',
      duration_ms: 291106,
      preview_url: 'https://p.scdn.co/mp3-preview/5c9f51d65bfeb63ca6b4fef15590d644c312c985?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 5,
      name: 'In Your Face',
      duration_ms: 255973,
      preview_url: 'https://p.scdn.co/mp3-preview/ee05dad2ba592e84e4b57288be505d568c4dfc57?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 6,
      name: 'Next In Line',
      duration_ms: 259041,
      preview_url: 'https://p.scdn.co/mp3-preview/a3cb905645cd2b81687d4a1c59fe3b607413173c?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 7,
      name: 'Bastards Of Bodom',
      duration_ms: 207840,
      preview_url: 'https://p.scdn.co/mp3-preview/e8fd94c15c2a364fd64e71701f12ed2305e2c6ca?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 8,
      name: 'Trashed, Lost And Strungout',
      duration_ms: 241640,
      preview_url: 'https://p.scdn.co/mp3-preview/84a4c63d45e23e0d4fb33c9f24d96382d3e52da8?cid=8897482848704f2a8f8d7c79726a70d4',
    },
    {
      track_number: 9,
      name: 'We\'re Not Gonna Fall',
      duration_ms: 197640,
      preview_url: 'https://p.scdn.co/mp3-preview/64225195a12022fd2a43f6f8a4c9487a86ecf1eb?cid=8897482848704f2a8f8d7c79726a70d4',
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

