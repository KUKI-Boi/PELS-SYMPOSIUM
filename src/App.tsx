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
import Registration from './sections/Registration';
import Venue from './sections/Venue';
import Committee from './sections/Committee';
import Contact from './sections/Contact';
import BlueprintLoader from './components/BlueprintLoader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <BlueprintLoader
        isVisible={isLoading}
        onComplete={() => setIsLoading(false)}
      />

      {/* Site content — rendered in background, revealed after loader exits */}
      <SmoothScroll>
        <div className="min-h-screen bg-background text-foreground flex flex-col relative grid-pattern">
          <Header />
          <main className="flex-1">
            <Hero />
            <EventStrip />
            <About />
            <Program />
            <Workshop />
            <Speakers />
            <Presentations />
            <Registration />
            <Venue />
            <Committee />
            <Contact />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}

export default App;
