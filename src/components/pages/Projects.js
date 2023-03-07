import React from 'react';
import Project from '../Project';

const Projects = () => {
  const projects_array = [
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
    <div className="container">
      <h1>Projects</h1>
      <div className="row">
        {projects_array.map((project) => (
          <Project
            title={project.title}
            deployedLink={project.deployedLink}
            repoLink={project.repoLink}
            imageURL={project.imageURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;