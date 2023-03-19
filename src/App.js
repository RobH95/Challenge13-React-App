import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
// import Blog from './components/pages/Blog';
import Contact from './components/pages/Contact';
import Learn from './components/pages/Learn';
import Projects from './components/pages/Projects';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

library.add(faCheckSquare, faCoffee);



function App() {
  return (
    <Router>
      <div className="container-fluid bd-dark">
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="challenge13-react-app">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/challenge13-react-app" element={<Home />} />
          <Route path="/challenge13-react-app/about" element={<About />} />
          {/* <Route path="/challenge13-react-app/blog" element={<Blog />} /> */}
          {/* Define a route that will have descendant routes */}
          <Route path="/challenge13-react-app/contact/*" element={<Contact />} />
          <Route path="/challenge13-react-app/learn" element={<Learn />} />
          <Route path="/challenge13-react-app/projects" element={<Projects />} />
        </Routes>
      </div>
       
      <div className="button-container">
        <div className="glass-btn blue-btn">
          <img src="https://i.postimg.cc/DwbWDQTx/facebook.png" alt="facebook" style={{width: '5.5em'}} />
        </div>

        <div className="glass-btn red-btn">
          <img src="https://i.postimg.cc/LstJ4Hhf/youtube.png" alt="youtube" style={{width: '6em'}} />
        </div>

        <div className="glass-btn amber-btn">
          <a href="https://www.linkedin.com/in/robert-hearns-74015377/">
            <img src="images/linkedin-logo.png" alt="linkedin"  className="social-icon" style={{width: '2.5em'}} />
          </a>
        </div>

        <div className="glass-btn amber-btn">
          <a href="https://github.com/RobH95">
            <img src="images/github-logo-face.png" className="social-icon" alt="github" style={{width: '3em'}} />
          </a>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
