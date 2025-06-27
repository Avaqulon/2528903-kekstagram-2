import './render-gallery.js';
import { isEscapeKey, isEnterKey} from './util.js';
import { pictures } from './render-gallery.js';

const bigPicturte = document.querySelector('.big-picture');
const bigPictureImgOpen = bigPicturte.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicturte.querySelector('.big-picture__cancel');

pictures.addEventListener('click', (evt) => { // связать по id??
  const currentPicture = evt.target.closest('.picture');
  bigPicturte.classList.remove('hidden');
});

bigPictureImgOpen.addEventListener('click', () => {
  bigPicturte.classList.remove('hidden');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    bigPicturte.classList.add('hidden');
  }
});

bigPictureImgOpen.addEventListener('keydown', (evt) => {
  if (isEnterKey (evt)) {
    bigPicturte.classList.remove('hidden');
  }
});

bigPictureCancel.addEventListener('click', () => {
  bigPicturte.classList.add('hidden');
});
zz
