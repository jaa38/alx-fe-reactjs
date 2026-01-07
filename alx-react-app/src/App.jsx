import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <UserProfile name='Alice' age='25' bio='Love hiking photography' />
      <Footer />
    </div>
  );
}

export default App;
