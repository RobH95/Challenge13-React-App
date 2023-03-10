import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


function Home() {
  return (
    <div>
      <Container>
        <Row>
          <h1>Home Page</h1>
        </Row>
      </Container>

      <div className="p-3 mb-2 bg-secondary text-white"></div>

      <section className="dark-grey-bg">
        <h2>My Section Heading</h2>
        <p>This is some text that describes my section.</p>
      </section>

      <Row>
        <Col xs={6}>Left Column</Col>
        <Col xs={6}>Right Column</Col>
      </Row>


      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
        varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
        Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
        imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
        ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
        elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
        consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
        malesuada fames ac ante ipsum primis in faucibus.
      </p>
    </div>
  );
}

export default Home;
