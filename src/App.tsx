import Header from './components/Header';
import Invite from './components/Invite';
import MoviesList from './components/MoviesList';
import { AppContainer } from './styles/AppContainer.styled';

function App() {
  return (
    <AppContainer>
      <Header />
      <Invite />
      <MoviesList />
    </AppContainer>
  );
}

export default App;
