import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import OtherPage from './components/OtherPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Router>
        
        <Navigation />
          
          <Routes>
          
              <Route path="/" element = {<Home />}/>
              
              <Route path="/otherPage" element = {<OtherPage />} />

          </Routes>

      </Router>
        
    </>
  );
}

export default App;
