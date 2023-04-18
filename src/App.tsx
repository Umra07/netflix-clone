import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Invite from './components/Invite';
import MoviesListBlock from './components/MoviesListBlock';
import { AppContainer } from './styles/AppContainer.styled';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_URL;

function App() {
  return (
    <AppContainer>
      <Header />
      <Invite />
      <MoviesListBlock />
      <MoviesListBlock />
      <Footer />
    </AppContainer>
  );
}

export default App;
