import {createPhotos} from './data.js';

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

export {pictures, similarPhotos};
