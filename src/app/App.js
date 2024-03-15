import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/navbar';
// import Header from "../components/Header/header"
import Home from '../pages/Home/home';
import Footer from '../components/Footer/footer';
import ArrowButton from '../components/ArrowButton/arrowButton';
// import Login from '../pages/Login/login';
// import Profile from '../pages/Profile/profile';
// import "../utils/styles/index.css"
// import { Provider } from "react-redux";
// import { store } from '../app/store';
// import PrivateRoute from '../components/PrivateRoute/privateRoute';


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
