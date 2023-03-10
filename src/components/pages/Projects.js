import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Projects = () => {
  const projects = [
    {
      title: 'Weather Dashboard (8)',
      deployedLink: 'https://robh95.github.io/Challenge8-Weather-Dashboard/',
      repoLink: 'https://github.com/RobH95/Challenge8-Weather-Dashboard',
      imageURL: 'screenshots/challenge8.png'
    },
    {
      title: 'Team Profile (12)',
      deployedLink: 'https://robh95.github.io/Challenge12-TeamProfile/output/team.html',
      repoLink: 'https://github.com/RobH95/Challenge12-TeamProfile',
      imageURL: 'screenshots/challenge12.png'
    },
    {
      title: 'README Generator (11)',
      deployedLink: 'https://robh95.github.io/challenge11-README-generator/',
      repoLink: 'https://github.com/RobH95/challenge11-README-generator',
      imageURL: 'screenshots/challenge11.png'
    },
    {
      title: 'Calendar (7)',
      deployedLink: 'https://robh95.github.io/Challenge7-Calendar/',
      repoLink: 'https://github.com/RobH95/Challenge7-Calendar',
      imageURL: 'screenshots/challenge7.png'
    },
    {
      title: 'Quiz (6)',
      deployedLink: 'https://robh95.github.io/Challenge6-Quiz/',
      repoLink: 'https://github.com/RobH95/Challenge6-Quiz',
      imageURL: 'screenshots/challenge6.png'
    },
    {
      title: 'Password Generator (5)',
      deployedLink: 'https://robh95.github.io/Challenge5-Password-gen/',
      repoLink: 'https://github.com/RobH95/Challenge5-Password-gen',
      imageURL: 'screenshots/challenge5.png'
    },
    {
      title: 'Console finances',
      deployedLink: 'https://robh95.github.io/console-finances',
      repoLink: 'https://github.com/RobH95/console-finances/',
      imageURL: 'https://github.com/RobH95/console-finances/raw/main/screenshots/1.png'
    },
  ];

  return (
    <Container>
      <h1 style={{ padding: '20px 0' }}>Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img variant="top" src={project.imageURL} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Link href={project.deployedLink}>Deployed App</Card.Link>
                <br />
                <Card.Link href={project.repoLink}>GitHub Repository</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
