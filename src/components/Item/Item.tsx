import { type ReactElement, useState } from 'react';
import type { ItemType, LocalStorageType } from './types.ts';
import { Rating } from '@components/Rating';
import './Item.scss';

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

  const handleClick = () => {
    setIsSelected((prevState) => !prevState);
    const copyLs = { ...ls };
    copyLs[image.src].isSelected = !copyLs[image.src].isSelected;
    saveToLs(copyLs);
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
      <Rating ls={ls} saveToLs={saveToLs} itemKey={image.src} />
    </div>
  );
};
