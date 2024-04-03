import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
import Home from '../pages/Home/home';
import Footer from '../components/Footer/footer';
import ArrowButton from '../components/ArrowButton/arrowButton';

function App() {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />   
          <Route path="/" element={<Home />} />
        </Routes>
        <ArrowButton />
        <Footer />
      </Router>
  );
};

export default App;
