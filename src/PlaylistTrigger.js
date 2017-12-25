/* eslint-env browser */

const albumTracks = document.getElementById('album-tracks');
let song = null;

function toggleActiveClass(element) {
  element.classList.toggle('active');
}

function addListenerToElement(element, event, callback) {
  element.addEventListener(event, () => {
    callback();
  });
}

export default function playlistTrigger() {
  albumTracks.addEventListener('click', (e) => {
    const { target } = e;
    const { parentNode } = target;
    const { dataset } = parentNode;
    const { trackPreview } = dataset;
    if (parentNode.classList.contains('active')) {
      song.pause();
    } else {
      if (song) {
        song.pause();
      }
      song = new Audio(trackPreview);
      addListenerToElement(song, 'play', () => {
        toggleActiveClass(parentNode);
      });
      addListenerToElement(song, 'pause', () => {
        toggleActiveClass(parentNode);
      });
      song.play();
    }
  });
}
