import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Invite from './components/Invite';
import MoviesListBlock from './components/MoviesListBlock';
import { AppContainer } from './styles/AppContainer.styled';
import { useAppDispatch } from './redux/store';
import { fetchMoviesGenres } from './redux/slices/mainPage/mainPageAsync';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesGenres());
  }, []);

  return (
    <AppContainer id="root">
      <Header />

      <Footer />
    </AppContainer>
  );
}

export default App;
