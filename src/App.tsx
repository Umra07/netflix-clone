import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Invite from './components/Invite';
import MoviesListBlock from './components/MoviesListBlock';
import { AppContainer } from './styles/AppContainer.styled';
import axios from 'axios';
import { useAppDispatch } from './redux/store';
import { fetchMoviesGenres } from './redux/slices/mainPage/mainPageAsync';

const API_KEY = import.meta.env.VITE_API_URL;

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMoviesGenres());
  }, []);

  return (
    <AppContainer>
      <Header />
      <Invite />
      <MoviesListBlock />
      <Footer />
    </AppContainer>
  );
}

export default App;
