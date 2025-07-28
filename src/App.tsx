import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/hero-section';
import LatestJobs from './components/latest-jobs';
import WhoWeWorkWith from './components/who-we-work-with';

function App() {
  return (
    <div className='app'>
      <Header />
      <HeroSection />
      <WhoWeWorkWith />
      <LatestJobs />
      <Footer />
    </div>
  );
}

export default App
