
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

function Home() {
    return (
      <div className="Home">
       
          <h1>Welcome to Jeromerobichez.com !</h1>
          <div><nav><Link to="/cv-jerome-robichez"><h2>CV</h2></Link></nav></div>
          <nav>
          <Link to="/about">About</Link>
        </nav>
       
      </div>
    );
  }
  
  export default Home;
  