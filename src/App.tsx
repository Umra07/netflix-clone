import { useEffect, useState } from 'react';
import Header from './components/Header';
import { AppContainer } from './styles/AppContainer.styled';
import { useAppDispatch } from './redux/store';
import { fetchMoviesGenres } from './redux/slices/mainPage/mainPageAsync';
import { Route, Routes } from 'react-router-dom';
import StartMembership from './pages/StartMembership';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <>
      <Header />
      <AppContainer>
        <Routes>
          <Route path="/" element={<StartMembership />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
