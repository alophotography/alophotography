import { CAMERAS } from '../constants/CamerasConstants.js';
import { COLLECTION_TITLES } from '../constants/CollectionsConstants.js';

export const CamerasData = [
  {
    id: CAMERAS.MAMIYA_C330S,
    title: CAMERAS.MAMIYA_C330S,
    date: '',
    cover: 'https://i.imgur.com/K8NKvci.jpg?1',
    photos: [
      {
        id: '1',
        img: 'https://i.imgur.com/N3X1Ioq.jpg',
        date: '',
        location: 'Shanghai, China',
        collection: COLLECTION_TITLES['collection-1'],
        camera: CAMERAS.MAMIYA_C330S,
        film: 'Kodak Portra 400',
        format: '120mm'
      },
      {
        id: '2',
        img: 'https://i.imgur.com/GkSB31T.jpg',
        date: '',
        location: 'Shanghai, China',
        collection: COLLECTION_TITLES['collection-1'],
        camera: CAMERAS.MAMIYA_C330S,
        film: 'Kodak Portra 400',
        format: '120mm'
      }
    ]
  }
]
