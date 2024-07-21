import './App.css';
import { Navbar, Footer, MainContent } from './sections';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <Navbar />
      <MainContent />
      <Footer />
      <Analytics />
    </>
  );
};
export default App;
