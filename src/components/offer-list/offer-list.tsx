import { MouseEvent } from 'react';
import cn from 'classnames';

import { useAppSelector } from '../../hooks';
import { sortOffers } from '../../utils';
import { Offers } from '../../types/offer-type';
import { PlaceCard } from '../place-card/place-card';

type OfferListProps = {
 offers: Offers;
 isCitiesCard: boolean;
 isNearbyPlaceCard: boolean;
 onOfferHover: (id: string | undefined) => void;
}

function OfferList ({ offers, isCitiesCard, isNearbyPlaceCard, onOfferHover }: OfferListProps) {
  const activeSorting = useAppSelector((state) => state.sortOption);

  const sortedOffers = sortOffers(offers, activeSorting);

  const handleOfferHover = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onOfferHover(evt.currentTarget.id);
  };

  const handleOfferLeave = (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    onOfferHover(undefined);
  };

  return (
    <div className={cn(
      'places__list',
      {'cities__places-list': isCitiesCard},
      {'tabs__content': isCitiesCard},
      {'near-places__list': isNearbyPlaceCard}
    )}
    >
      {sortedOffers.map((offer) => (
        <PlaceCard key={offer.id}
          offer={offer}
          isCitiesCard={isCitiesCard}
          isNearbyPlaceCard={isNearbyPlaceCard}
          handleOfferHover={handleOfferHover}
          handleOfferLeave={handleOfferLeave}
        />
      ))}
    </div>
  );
}

export { OfferList };
