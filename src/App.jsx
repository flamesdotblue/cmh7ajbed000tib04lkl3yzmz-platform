import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Services />
      <WorkShowcase />
      <ContactFooter />
    </div>
  );
}

export default App;
