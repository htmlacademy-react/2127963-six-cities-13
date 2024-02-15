import { useState } from 'react';
import cn from 'classnames';
import { FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeSortOption } from '../../store/action';
import { SortOption } from '../../const';

function Sorting() {
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuClick = (evt: FormEvent<HTMLElement>) => {
    evt.preventDefault();
    setMenuOpen(!isMenuOpen);
  };


  const dispatch = useAppDispatch();
  const activeSorting = useAppSelector((state) => state.sortOption);


  const handleSortingChange = (evt: FormEvent<HTMLElement>) => {
    evt.preventDefault();
    if (!evt.currentTarget.textContent || evt.currentTarget.textContent === activeSorting) {
      return;
    }
    dispatch(changeSortOption(evt.currentTarget.textContent));
    setMenuOpen(!isMenuOpen);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by: </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleMenuClick}>
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={cn(
        'places__options',
        'places__options--custom',
        {'places__options--opened': isMenuOpen},
      )}
      >
        {Object.entries(SortOption).map(([sortType, sortTitle]) => (
          <li className={cn(
            'places__option',
            {'places__option--active': sortTitle === activeSorting},
          )}
          tabIndex={0} key={sortType} onClick={handleSortingChange}
          >{sortTitle}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { Sorting };
