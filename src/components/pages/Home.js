import React from "react";
import { Container, Row } from 'react-bootstrap';


function Home() {
  return (
    <div>
      <Container>
        <Row>
          <h1>Home Page</h1>
        </Row>
      </Container>

      <h2>My Section Heading</h2>
      <p>This is some text that describes my section.</p>


      <p>
        Welcome to my online portfolio! As a front-end web developer, I am excited to share with you my accomplishments, skills, and experiences that have shaped me both professionally and personally. This portfolio is a reflection of my work, showcasing some of the projects I have worked on and my skills in HTML, CSS and JavaScript.
        My passion for web development has been a new passion of mine, and I am dedicated to constantly expanding my knowledge and skillset in this area. Through this portfolio, I hope to demonstrate my expertise and show how my unique perspective can bring value to your projects.
        Thank you for taking the time to explore my portfolio, and I look forward to hearing from you.
      </p>
    </div>
  );
}

export default Home;
