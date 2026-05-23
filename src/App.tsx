import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Apps from './components/Apps';
import Instagram from './components/Instagram';
import YouTube from './components/YouTube';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="mx-auto max-w-6xl px-6">
        <Hero />
        <About />
        <Apps />
        <YouTube />
        <Instagram />
      </main>
      <Footer />
    </div>
  );
}
