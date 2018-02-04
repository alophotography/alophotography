import { CAMERAS } from '../constants/CamerasConstants.js';
import { PhotosData } from './PhotosData.js';

const mamiyaC330s = [];
const minoltaX700 = [];
const polaroid690 = [];
const instaxwide210 = [];

PhotosData.map((photo) => {
  if (photo.camera === CAMERAS.MAMIYA_C330S) {
    mamiyaC330s.push(photo);
  } else if (photo.camera === CAMERAS.MINOLTA_X700) {
    minoltaX700.push(photo);
  } else if (photo.camera === CAMERAS.POLAROID_690) {
    polaroid690.push(photo);
  } else if (photos.camera === CAMERAS.INSTAX_WIDE_210) {
    instaxwide210.push(photo);
  }
  return null;
})

export const CamerasData = [
  {
    id: 'mamiya-c330s',
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
  // {
  //   id: 'minolta-x700',
  //   title: CAMERAS.MINOLTA_X700,
  //   date: '',
  //   cover: 'https://i.imgur.com/K8NKvci.jpg?1',
  //   photos: minoltaX700,
  //   info:
  //     'Camera type: Single-lens reflex\n' +
  //     'Film format: 35mm\n' +
  //     'Lens: Minolta MD 50mm 1:2\n' +
  //     // 'Made in Japan\n' +
  //     'Released in 1981'
  // },
  // {
  //   id: 'polaroid-690',
  //   title: CAMERAS.POLAROID_690,
  //   date: '',
  //   cover: 'https://i.imgur.com/K8NKvci.jpg?1',
  //   photos: polaroid690,
  //   info:
  //     'Camera type: Single-lens reflex instant camera\n' +
  //     'Film format: Instant film\n' +
  //     'Lens: 116mm f/8\n' +
  //     // 'Made in Japan\n' +
  //     'Released in 1996 '
  // },
  // {
  //   id: 'instax-wide-210',
  //   title: CAMERAS.INSTAX_WIDE_210,
  //   date: '',
  //   cover: 'https://i.imgur.com/K8NKvci.jpg?1',
  //   photos: instaxwide210,
  //   info:
  //     'Camera type: Instant camera\n' +
  //     'Film format: Instant film\n' +
  //     'Lens: 95mm f/14\n' +
  //     'Released in 2009 '
  // }
]
