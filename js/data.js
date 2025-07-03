import {getRandomArrayElement} from './util.js';
import {getRandomInteger} from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Виктория','Степан','Ирина','Андрей','Анастасия','Егор','Марина','Александр','Дарья','Дмитрий','Мария',
];

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const LENGTH_PHOTOS = 25;

const DESCRIPTION = 'Очень красивая фотография';

const createId = () => {
  let currentId = 0;
  return () => ++currentId;
};

const createIdComment = createId();
const createIdPhoto = createId();

export const createComment = () => ({
  id: createIdComment(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const createPhoto = () => {
  const id = createIdPhoto();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: (DESCRIPTION),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)}, createComment)
  };
};

export const createPhotos = () => Array.from({length: LENGTH_PHOTOS}, createPhoto);
