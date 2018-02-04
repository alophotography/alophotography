import { COLLECTION_TITLES } from '../constants/CollectionsConstants.js';
import { PhotosData } from './PhotosData.js';

const shanghaiMemories = [];
const berkeleyDec2017 = [];
const weekends = [];
const commute = [];
const whiteChristmas = [];
const genoa = [];
const cityOfAngels = [];
const paradise = [];

PhotosData.map((photo) => {
  if (photo.collection === 'shanghai-memories') {
    shanghaiMemories.push(photo);
  } else if (photo.collection === 'berkeley-dec-2017') {
    berkeleyDec2017.push(photo);
  } else if (photo.collection === 'weekends') {
    weekends.push(photo);
  } else if (photo.collection === 'commute') {
    commute.push(photo);
  } else if (photo.collection === 'white-christmas') {
    whiteChristmas.push(photo);
  } else if (photo.collection === 'genoa') {
    genoa.push(photo);
  } else if (photo.collection === 'city-of-angels') {
    cityOfAngels.push(photo);
  } else if (photo.collection === 'paradise') {
    paradise.push(photo);
  }
  return null;
})

export const CollectionsData = [
  {
    id: 'paradise',
    title: COLLECTION_TITLES['paradise'],
    date: '',
    cover: 'https://i.imgur.com/0mkoz8i.png',
    photos: paradise
  },
  {
    id: 'city-of-angels',
    title: COLLECTION_TITLES['city-of-angels'],
    date: '',
    cover: 'https://i.imgur.com/399S4Ci.jpg',
    photos: cityOfAngels
  },
  {
    id: 'genoa',
    title: COLLECTION_TITLES['genoa'],
    date: '',
    cover: 'https://i.imgur.com/t9uLwWr.jpg',
    photos: genoa
  },
  {
    id: 'white-christmas',
    title: COLLECTION_TITLES['white-christmas'],
    date: '',
    cover: 'https://i.imgur.com/cnAclK7.jpg',
    photos: whiteChristmas
  },
  {
    id: 'commute',
    title: COLLECTION_TITLES['commute'],
    date: '',
    cover: 'https://i.imgur.com/WHIHtMo.jpg',
    photos: commute
  },
  {
    id: 'weekends',
    title: COLLECTION_TITLES['weekends'],
    date: '',
    cover: 'https://i.imgur.com/2EWPG4n.jpg',
    photos: weekends
  },
  {
    id: 'berkeley-dec-2017',
    title: COLLECTION_TITLES['berkeley-dec-2017'],
    date: '',
    cover: 'https://i.imgur.com/mAQidIn.jpg',
    photos: berkeleyDec2017
  },
  {
    id: 'shanghai-memories',
    title: COLLECTION_TITLES['shanghai-memories'],
    date: '',
    cover: 'https://i.imgur.com/N3X1Ioq.jpg',
    photos: shanghaiMemories
  }
]
