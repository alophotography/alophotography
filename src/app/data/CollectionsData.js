import { COLLECTION_TITLES } from '../constants/CollectionsConstants.js';
import { PhotosData } from './PhotosData.js';

const collec1 = [];
const collec2 = [];
const collec3 = [];
const collec4 = [];
const collec5 = [];
const collec6 = [];
const collec7 = [];

PhotosData.map((photo) => {
  if (photo.collection === 'collection-1') {
    collec1.push(photo);
  } else if (photo.collection === 'collection-2') {
    collec2.push(photo);
  } else if (photo.collection === 'collection-3') {
    collec3.push(photo);
  } else if (photo.collection === 'collection-4') {
    collec4.push(photo);
  } else if (photo.collection === 'collection-5') {
    collec5.push(photo);
  } else if (photo.collection === 'collection-6') {
    collec6.push(photo);
  } else if (photo.collection === 'collection-7') {
    collec7.push(photo);
  }
  return null;
})

export const CollectionsData = [
  {
    id: 'collection-7',
    title: COLLECTION_TITLES['collection-7'],
    date: '',
    cover: 'https://i.imgur.com/399S4Ci.jpg',
    photos: collec7
  },
  {
    id: 'collection-6',
    title: COLLECTION_TITLES['collection-6'],
    date: '',
    cover: 'https://i.imgur.com/t9uLwWr.jpg',
    photos: collec6
  },
  {
    id: 'collection-5',
    title: COLLECTION_TITLES['collection-5'],
    date: '',
    cover: 'https://i.imgur.com/cnAclK7.jpg',
    photos: collec5
  },
  {
    id: 'collection-4',
    title: COLLECTION_TITLES['collection-4'],
    date: '',
    cover: 'https://i.imgur.com/WHIHtMo.jpg',
    photos: collec4
  },
  {
    id: 'collection-3',
    title: COLLECTION_TITLES['collection-3'],
    date: '',
    cover: 'https://i.imgur.com/2EWPG4n.jpg',
    photos: collec3
  },
  {
    id: 'collection-2',
    title: COLLECTION_TITLES['collection-2'],
    date: '',
    cover: 'https://i.imgur.com/mAQidIn.jpg',
    photos: collec2
  },
  {
    id: 'collection-1',
    title: COLLECTION_TITLES['collection-1'],
    date: '',
    cover: 'https://i.imgur.com/N3X1Ioq.jpg',
    photos: collec1
  }
]
