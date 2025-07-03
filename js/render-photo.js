import './render-gallery.js';
import {isEnterKey} from './util.js';
import {similarPhotos} from './render-gallery.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImgOpen = bigPicture.querySelector('.big-picture__img').querySelector('img');
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel');
const likesCount = bigPicture.querySelector('.likes-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCommentTemplate = socialComments.querySelector('.social__comment');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

export const openBigPicture = ({url, likes, description}) => {
  //const currentPhoto = similarPhotos.find(({ id }) => id.toString() === pictureId);
  const socialCommentsFragment = document.createDocumentFragment();

  bigPictureImgOpen.src = url;
  likesCount.textContent = likes;
  socialComments.innerHTML = '';

  similarPhotos.comments.forEach((comment) => {
    const socialComment = socialCommentTemplate.cloneNode(true);

    socialComment.querySelector('.social__picture').src = comment.avatar;
    socialComment.querySelector('.social__picture').alt = comment.name;
    socialComment.querySelector('.social__text').textContent = comment.message;

    socialComments.appendChild(socialComment);
  });

  socialComments.appendChild(socialCommentsFragment);
  socialCaption.textContent = description;
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', pressEscapeButton);
};

bigPictureImgOpen.addEventListener('click', () => {
  bigPicture.classList.remove('hidden');
});

function pressEscapeButton(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
  }
}

bigPictureImgOpen.addEventListener('keydown', (evt) => {
  if (isEnterKey (evt)) {
    bigPicture.classList.remove('hidden');
  }
});

bigPictureCancel.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', pressEscapeButton);
});
