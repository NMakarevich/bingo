import { type ReactElement, useState } from 'react';
import type { ItemType } from './types.ts';

import './Item.scss';

export const Item = ({
  item,
  ls,
  saveToLs,
}: {
  item: ItemType;
  ls: string[];
  saveToLs: (value: string[]) => void;
}): ReactElement => {
  const { image, name } = item;
  const [isSelected, setIsSelected] = useState(ls.includes(image.src));

  const handleClick = () => {
    setIsSelected((prevState) => !prevState);
    if (isSelected) {
      saveToLs(ls.filter((i) => i !== image.src));
    } else {
      saveToLs([...ls, image.src]);
    }
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
    </div>
  );
};
