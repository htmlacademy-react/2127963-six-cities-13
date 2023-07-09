import Main from '../../pages/main/main';

type AppProps = {
  offersNumber: number;
  userName: string;
  favoritesNumber: number;
}

function App({offersNumber, userName, favoritesNumber}: AppProps): JSX.Element {
  return (
    <Main offersNumber={offersNumber} userName={userName} favoritesNumber={favoritesNumber}/>
  );
}

export default App;
