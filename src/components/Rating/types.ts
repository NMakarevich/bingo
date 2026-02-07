import type { LocalStorageType } from '@components/Item';

export type RatingType = {
  itemKey: string;
  ls: LocalStorageType;
  saveToLs: (ls: LocalStorageType) => void;
};
