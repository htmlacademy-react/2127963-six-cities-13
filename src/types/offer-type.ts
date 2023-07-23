type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type City = {
  name: string;
  location: OfferLocation;
};

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;

  location: OfferLocation;

  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type Offers = Offer[]

export type DetailedOffer = Omit<Offer, 'previewImage'>
& {
    description: string;
    bedrooms: number;
    goods: string[];
    host: Host;
    images: string[];
    maxAdults: number;
 }
