import './render-gallery.js';
import {isEscapeKey, isEnterKey} from './util.js';
import {pictures, similarPhotos} from './render-gallery.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImgOpen = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');

const openBigPicture = (pictureId) => {
  const currentPhoto = similarPhotos.find(({ id }) => id.toString() === pictureId);
  const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImgOpen.src = currentPhoto.url;
  likesCount.textContent = currentPhoto.likes;
  socialComments.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const socialNode = socialCommentTemplate.cloneNode(true);

  });
};

pictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  //const currentPictureId = currentPicture.dataset.pictureId;
  if(currentPicture){
    openBigPicture(currentPicture.dataset.pictureId);
  }
  bigPicture.classList.remove('hidden');
});

bigPictureImgOpen.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
});

document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
});

bigPictureImgOpen.addEventListener('keydown', (evt) => {
  if (isEnterKey (evt)) {
    bigPicture.classList.remove('hidden');
  }
});

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
});

