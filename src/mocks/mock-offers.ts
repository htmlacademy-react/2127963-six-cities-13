const offers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 820,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://13.design.pages.academy/static/hotel/16.jpg'
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'https://13.design.pages.academy/static/hotel/18.jpg'
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Nice apartment',
    type: 'apartment',
    price: 280,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11
    },

    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://13.design.pages.academy/static/hotel/2.jpg'
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Luxurious apartment',
    type: 'apartment',
    price: 1000,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: true,
    rating: 4,
    previewImage: 'https://13.design.pages.academy/static/hotel/12.jpg'
  }
];
const detailedOffers = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 820,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'A quiet cozy and picturesque apartment that hides behind a river by the unique lightness of Amsterdam.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/5.jpg',
      isPro: false
    },
    images: [
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
    ],
    maxAdults: 4
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: false,
    rating: 5,
    description: 'A quiet and cozy room in Amsterdam.',
    bedrooms: 1,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/4.jpg',
      isPro: false
    },
    images: [
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
    ],
    maxAdults: 1
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Nice apartment',
    type: 'apartment',
    price: 280,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11
    },

    isFavorite: false,
    isPremium: false,
    rating: 4,
    description: 'A quiet cozy and picturesque place.',
    bedrooms: 2,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/2.jpg',
      isPro: false
    },
    images: [
      'img/room.jpg',
      'img/room.jpg',
      'img/apartment-01.jpg',
      'img/studio-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
    ],
    maxAdults: 3
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f03',
    title: 'Luxurious apartment',
    type: 'apartment',
    price: 1000,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: true,
    rating: 4,
    description: 'Amazing apartment with a river view.',
    bedrooms: 3,
    goods: [
      'Heating'
    ],
    host: {
      name: 'Oliver Conner',
      avatarUrl: 'https://13.design.pages.academy/static/avatar/7.jpg',
      isPro: true
    },
    images: [
      'img/room.jpg',
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-01.jpg',
      'img/room.jpg',
      'img/apartment-02.jpg',
    ],
    maxAdults: 2
  }
];

const offersNearby = [
  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f00',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 820,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943509,
        longitude: 4.85309666406199,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: 'https://13.design.pages.academy/static/hotel/16.jpg'
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f01',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943509,
        longitude: 4.85309666406199,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 11
    },

    isFavorite: true,
    isPremium: false,
    rating: 5,
    previewImage: 'https://13.design.pages.academy/static/hotel/18.jpg'
  },

  {
    id: '6af6f711-c28d-4121-82cd-e0b462a27f02',
    title: 'Nice apartment',
    type: 'apartment',
    price: 280,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943509,
        longitude: 4.929309666406199,
        zoom: 11
      }
    },

    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 11
    },

    isFavorite: false,
    isPremium: false,
    rating: 4,
    previewImage: 'https://13.design.pages.academy/static/hotel/2.jpg'
  },

];

const SELECTED_CITY = {
  name: 'Amsterdam',
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 11,
  }
};

export { offers, detailedOffers, offersNearby, SELECTED_CITY };
