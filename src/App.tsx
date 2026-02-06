import './App.scss';
import { JAMS, LOCAL_STORAGE_KEY } from './constants.ts';
import { Item } from '@components/Item';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useEffect } from 'react';
import type { ItemType } from '@components/Item/types.ts';

function App() {
  const [ls, saveToLs] = useLocalStorage(LOCAL_STORAGE_KEY, {});

  useEffect(() => {
    if (Array.isArray(ls)) {
      const jamsLs = JAMS.map((jam) => {
        jam.isSelected = ls.includes(jam.image.src);
        return jam;
      }).reduce(
        (acc, currentValue) => {
          acc[currentValue.image.src] = currentValue;
          return acc;
        },
        {} as { [p: string]: ItemType },
      );
      saveToLs(jamsLs);
    }
  }, []);

  return (
    <>
      <h1>St.Dalfour Bingo</h1>
      <div className={'container'}>
        {JAMS.map((jam) => (
          <Item ls={ls} saveToLs={saveToLs} item={jam} key={jam.image.src} />
        ))}
      </div>
    </>
  );
}

export default App;
