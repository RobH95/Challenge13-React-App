import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


function Contact(props) {
  return (
    <div>
      <h1 className="Contact">&lt;Contact&gt;</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        
      </p>
      {/* <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link> */}

      <footer>
        <h1 className="Contact">&lt;/Contact&gt;</h1>
      </footer>

    </div>
  );
}

export default Contact;
