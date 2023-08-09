import { Review } from '../types/review-type';

const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    date: '2019-05-08T14:13:56.569Z',
    user: {
      name: 'Oliver C',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/7.jpg',
      isPro: false
    },
    comment: 'A quiet cozy and picturesque place.',
    rating: 4,
  },

  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62',
    date: '2020-10-24T14:13:56.569Z',
    user: {
      name: 'Oliver',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/8.jpg',
      isPro: true
    },
    comment: 'We had fun.',
    rating: 5,
  },

  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b6',
    date: '2019-05-15T14:13:56.569Z',
    user: {
      name: 'Snow',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/6.jpg',
      isPro: false
    },
    comment: 'Amazing!!!!!!!',
    rating: 5,
  },
];

export { reviews };
