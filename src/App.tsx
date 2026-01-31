import './App.scss';
import { JAMS, LOCAL_STORAGE_KEY } from './constants.ts';
import { Item } from './components/Item';
import { useLocalStorage } from './hooks/useLocalStorage.tsx';

function App() {
  const [ls, saveToLs] = useLocalStorage(LOCAL_STORAGE_KEY, [] as string[]);

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
