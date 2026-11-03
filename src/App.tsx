import { useState } from 'react';
import SmoothScroll from './components/SmoothScroll';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import EventStrip from './sections/EventStrip';
import About from './sections/About';
import Program from './sections/Program';
import Workshop from './sections/Workshop';
import Speakers from './sections/Speakers';
import Presentations from './sections/Presentations';
import Venue from './sections/Venue';
import Contact from './sections/Contact';
import PelsLoader from './components/PelsLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <PelsLoader
        isVisible={isLoading}
        onComplete={() => setIsLoading(false)}
      />

      <SmoothScroll>
        <div className="min-h-screen w-full bg-background text-foreground flex flex-col relative grid-pattern overflow-x-hidden">
          <Header />
          <main className="flex-1">
            <Hero />
            <EventStrip />
            <About />
            <Program />
            <Workshop />
            <Speakers />
            <Presentations />
            <Venue />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
