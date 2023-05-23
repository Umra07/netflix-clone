import { useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Invite from './components/Invite';
import MoviesListBlock from './components/MoviesListBlock';
import { AppContainer } from './styles/AppContainer.styled';
import { useAppDispatch } from './redux/store';
import { fetchMoviesGenres } from './redux/slices/mainPage/mainPageAsync';
import CustomBackground from './components/UI/CustomBackground';

import backgroundImg from './assets/main-bg.jpg';
import FeatureList from './components/FeaturesList';
import QuestionsList from './components/QuestionsList';
import CustomInputBlock from './components/UI/CustomInputBlock';
import RouterApp from './components/routes/RouterApp';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesGenres());
  }, []);

  return (
    <>
      <Header />
      <AppContainer>
        <RouterApp />
      </AppContainer>
    </>
  );
}

export default App;
