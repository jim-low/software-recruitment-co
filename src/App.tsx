import { useEffect, useState } from 'react';
import './App.css'
import Footer from './components/footer';
import Header from './components/header';
import HeroSection from './components/hero-section';
import LatestJobs from './components/latest-jobs';
import WhoWeWorkWith from './components/who-we-work-with';

function App() {
  const [showDisappointmentMessage, setShowDisappointmentMessage] = useState(false);

  useEffect(() => {
    const handleOnResize = () => {
      setShowDisappointmentMessage(document.documentElement.clientWidth <= 600);
    };

    handleOnResize();
    window.addEventListener('resize', handleOnResize);
    return () => {
      window.removeEventListener('resize', handleOnResize);
    }
  }, []);

  if (showDisappointmentMessage) {
    return (
      <p className='text-center w-[400px] m-auto'>
        Unfortunately there was not enough time to implement mobile responsiveness :(
      </p>
    );
  }

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
