
import { Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';
import CvPage from './CvPage';
import CvFile from './CvFile';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cv-jerome-robichez" element={<CvFile />} />
      </Routes>
     
    </div>
  );
}

export default App;



