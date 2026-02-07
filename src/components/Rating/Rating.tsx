import {
  type MouseEvent,
  type ReactElement,
  useCallback,
  useState,
} from 'react';
import { Star } from '@components/Star';
import type { RatingType } from '@components/Rating/types.ts';
import { RATING } from '@components/Rating/constants.ts';
import './Rating.scss';

export const Rating = (props: RatingType): ReactElement => {
  const { ls, saveToLs, itemKey } = props;

  const [itemRating, setItemRating] = useState(ls[itemKey].rating);

  const updateRating = useCallback(
    (event: MouseEvent, index: number) => {
      event.stopPropagation();
      const copyLs = { ...ls };
      if (itemRating === index + 1) {
        copyLs[itemKey].rating = 0;
        setItemRating(0);
      } else {
        copyLs[itemKey].rating = index + 1;
        setItemRating(index + 1);
      }
      saveToLs(copyLs);
    },
    [itemKey, itemRating, ls, saveToLs],
  );

  const isFilled = (index: number) => {
    return index + 1 <= itemRating;
  };

  return (
    <div className={'rating'}>
      {RATING.map((_, index) => (
        <span
          className={'rating-star'}
          key={index}
          onClick={(event) => updateRating(event, index)}
        >
          <Star filled={isFilled(index)} />
        </span>
      ))}
    </div>
  );
};
