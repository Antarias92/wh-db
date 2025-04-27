import './App.css';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );  
}

export default App;
