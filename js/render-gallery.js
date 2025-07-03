import {createPhotos, createComment} from './data.js';
import { openBigPicture } from './render-photo.js';

const pictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const similarPhotos = createPhotos();
const similarPhotoFragment = document.createDocumentFragment();

similarPhotos.forEach(({url, description, likes, comments, id}) => {
  const pictureElement = templatePicture.cloneNode(true);
  const imgElement = pictureElement.querySelector('.picture__img');
  imgElement.src = url;
  imgElement.alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.dataset.pictureId = id;
  similarPhotoFragment.appendChild(pictureElement);
});

pictures.appendChild(similarPhotoFragment);

const onPicturesClick = (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (!currentPicture) {
    return;
  }

  const getPictureData = similarPhotos.find(({ id }) => id.toString() === createPhotos.id);
  const pictureData = getPictureData(evt.dataset.id);

  if(pictureData){
    openBigPicture(pictureData);
  }
};

pictures.addEventListener('click', onPicturesClick);

pictures.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if(currentPicture){
    openBigPicture(currentPicture.dataset.pictureId);
  }
});

export {pictures, similarPhotos};
