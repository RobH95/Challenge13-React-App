import React from "react";
// import { Container, Row } from 'react-bootstrap';


function Home() {
  return (
    <div>
      <h1 className='Home'>&lt;Home&gt;</h1>
      <h2 className='Name'>let myName = 'Robert Hearns';</h2>
      <h3>Welcome to my Portfolio</h3>
      <div>
        <img id="avatar" src="images/robert-hearns-avatar.jpg" alt="Robert Hearns" />
      </div>
      
      <p>
         I'm a front-end web developer excited to share
         my skills and experiences with you. This site showcases my work and expertise 
         in HTML, CSS and JavaScript. In addition that, i have been learning about amazing frameworks such as React. As a passionate developer, I'm committed to
          constantly expanding my knowledge. Let me bring value to your projects. 
          Thanks for exploring my portfolio, and I look forward to hearing from you!
      </p>

      <footer>
        <h1 className="Home">&lt;/Home&gt;</h1>
      </footer>
    </div>
  );
}

export default Home;
