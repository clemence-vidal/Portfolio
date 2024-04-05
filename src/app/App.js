import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import Sent from '../pages/Sent/sent';
import Footer from '../components/Footer/footer';
import ArrowButton from '../components/ArrowButton/arrowButton';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />   
          <Route path="/sent" element={<Sent />} />   
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ArrowButton />
        <Footer />
      </Router>
  );
};

export default App;
