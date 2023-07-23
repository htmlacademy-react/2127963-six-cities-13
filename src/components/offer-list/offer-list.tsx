import { Offers } from '../../types/offer-type';
import { PlaceCard } from '../place-card/place-card';

type OfferListProps = {
 offers: Offers;
}

function OfferList ({ offers }: OfferListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">

      {offers.map((offer) => <PlaceCard key={offer.id} offer={offer}/>)}

    </div>
  );
}

export { OfferList };
