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
    photos: mamiyaC330s,
    info:
      'Camera type: Twin-lens reflex\n' +
      'Film format: Medium format (6x6)\n' +
      'Lens: Mamiya-Sekor 1:3.5 f = 65mm\n' +
      'Made in Japan\n' +
      'Released in 1983'
  },
  {
    id: CAMERAS.MINOLTA_X700,
    title: CAMERAS.MINOLTA_X700,
    date: '',
    cover: 'https://i.imgur.com/K8NKvci.jpg?1',
    photos: minoltaX700,
    info:
      'Camera type: Single-lens reflex\n' +
      'Film format: 35mm\n' +
      'Lens: Minolta MD 50mm 1:2\n' +
      // 'Made in Japan\n' +
      'Released in 1981'
  }
]
