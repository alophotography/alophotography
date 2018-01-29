import { CAMERAS } from '../constants/CamerasConstants.js';
import { PhotosData } from './PhotosData.js';

const mamiyaC330s = [];
const minoltaX700 = [];

PhotosData.map((photo) => {
  if (photo.camera === CAMERAS.MAMIYA_C330S) {
    mamiyaC330s.push(photo);
  } else if (photo.camera === CAMERAS.MINOLTA_X700) {
    minoltaX700.push(photo);
  }
  return null;
})

export const CamerasData = [
  {
    id: CAMERAS.MAMIYA_C330S,
    title: CAMERAS.MAMIYA_C330S,
    date: '',
    cover: 'https://i.imgur.com/K8NKvci.jpg?1',
    photos: mamiyaC330s
  },
  {
    id: CAMERAS.MINOLTA_X700,
    title: CAMERAS.MINOLTA_X700,
    date: '',
    cover: '',
    photos: minoltaX700
  }
]
