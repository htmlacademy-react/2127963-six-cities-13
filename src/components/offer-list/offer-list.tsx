import { MouseEvent } from 'react';
import { Offers } from '../../types/offer-type';
import { PlaceCard } from '../place-card/place-card';

type OfferListProps = {
 offers: Offers;
 onOfferHover: (id: string | undefined) => void;
}

function OfferList ({ offers, onOfferHover }: OfferListProps) {
  const handleOfferHover = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onOfferHover(evt.currentTarget.id);

  };

  const handleOfferLeave = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onOfferHover(undefined);
  };

  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer} handleOfferHover={handleOfferHover} handleOfferLeave={handleOfferLeave}/>)}

    </div>
  );
}

export { OfferList };
