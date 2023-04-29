
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <>
     <Navbar/>;
     <Hero/>;
     <h2 className='text-3xl mt-8 mb-3 text-gray-600 text-left'>Upcoming Hackathons</h2>;
     <Card/>
     <Footer />
    </>
  )
}

export default App;
