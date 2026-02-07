import {
  type MouseEvent,
  type ReactElement,
  useCallback,
  useState,
} from 'react';
import type { ItemType, LocalStorageType } from './types.ts';

import './Item.scss';
import { Star } from '@components/Star';
const MAX_RATING = 3;

export const Item = ({
  item,
  ls,
  saveToLs,
}: {
  item: ItemType;
  ls: LocalStorageType;
  saveToLs: (value: LocalStorageType) => void;
}): ReactElement => {
  const { image, name } = item;
  const [isSelected, setIsSelected] = useState(ls[image.src].isSelected);
  const [itemRating, setItemRating] = useState(ls[image.src].rating);

  const handleClick = () => {
    setIsSelected((prevState) => !prevState);
    const copyLs = { ...ls };
    copyLs[image.src].isSelected = !copyLs[image.src].isSelected;
    saveToLs(copyLs);
  };

  const updateRating = useCallback(
    (event: MouseEvent, index: number) => {
      event.stopPropagation();
      setItemRating(index + 1);
      const copyLs = { ...ls };
      copyLs[image.src].rating = index + 1;
      saveToLs(copyLs);
    },
    [image.src, ls, saveToLs],
  );

  const rating = new Array(MAX_RATING).fill(0);

  const isFilled = (index: number) => {
    return index + 1 <= itemRating;
  };

  return (
    <div
      className={`item ${isSelected ? 'selected' : ''}`}
      onClick={handleClick}
    >
      <h2 className={'item-title'}>{name}</h2>
      <img
        className={'image'}
        src={image.src}
        alt={image.alt}
        loading={image.loading}
      />
      <div className={'item-rating'}>
        {rating.map((_, index) => (
          <span
            className={'item-rating_star'}
            key={index}
            onClick={(event) => updateRating(event, index)}
          >
            <Star filled={isFilled(index)} />
          </span>
        ))}
      </div>
    </div>
  );
};
