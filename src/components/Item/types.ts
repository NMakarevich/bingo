export type ItemType = {
  image: {
    src: string;
    alt: string;
    loading?: 'lazy' | 'eager';
  };
  isSelected: boolean;
  name: string;
  rating: number;
};

export type LocalStorageType = {
  [key: string]: ItemType;
};
