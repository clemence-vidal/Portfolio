import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "../components/Header/header"
import Home from '../pages/Home/home';
import Footer from '../components/Footer/footer';
// import Login from '../pages/Login/login';
// import Profile from '../pages/Profile/profile';
// import "../utils/styles/index.css"
// import { Provider } from "react-redux";
// import { store } from '../app/store';
// import PrivateRoute from '../components/PrivateRoute/privateRoute';


function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />   
          {/* <Route path="/login" element={<Login />} />  
          <Route element={<PrivateRoute />} >
            <Route path="/profile" element={<Profile />} /> 
          </Route>     */}
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
  );
};

export default App;
