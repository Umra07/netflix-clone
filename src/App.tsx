import Footer from './components/Footer';
import Header from './components/Header';
import Invite from './components/Invite';
import MoviesListBlock from './components/MoviesListBlock';
import { AppContainer } from './styles/AppContainer.styled';

function App() {
  return (
    <AppContainer>
      <Header />
      <Invite />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <MoviesListBlock />
      <Footer />
    </AppContainer>
  );
}

export default App;
