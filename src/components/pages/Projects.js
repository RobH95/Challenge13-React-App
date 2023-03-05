import React from 'react';
import Project from '../Project';

const Projects = () => {
  const projects_array = [
    {
      title: 'Project 1',
      deployedLink: 'https://www.example.com/project1',
      repoLink: 'https://github.com/user/project1',
      imageURL: 'blah.jpg'
    },
    {
      title: 'Project 2',
      deployedLink: 'https://www.example.com/project2',
      repoLink: 'https://github.com/user/project2',
      imageURL: 'blah.jpg'
    },
    {
      title: 'Project 3',
      deployedLink: 'https://www.example.com/project3',
      repoLink: 'https://github.com/user/project3',
      imageURL: 'blah.jpg'
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