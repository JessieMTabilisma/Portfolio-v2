import React, { useState } from 'react';

const projects = () => {
  const projectData = [
    {
      id: 1,
      projectTitle: 'Orange Omengan',
      description: 'Elegant Portfolio Website for Photographer Orange Omengan',
      imgPath: '/omengan.svg',
      alt: 'Orange Omengan Photographer'
    },
    {
      id: 2,
      projectTitle: 'kagapAI',
      description: 'An Automated Text Analysis Tool for Psychologist',
      imgPath: '/kaagapai.svg',
      alt: 'kaagapAI Text Analysis Tool'
    }
  ];
  const [isLoaded, setLoaded] = useState(false);
  const projects = projectData.map((project, index) => {
    return (
      <div
        key={project.id}
        className={`cursor-pointer ${index % 2 === 0 ? 'mt-0' : 'mt-20'}`}
      >
        <img src={project.imgPath} alt={project.alt} />
        <h2 className="font text-2xl mt-5 text-black-200 font-medium">
          {project.projectTitle}
        </h2>
        <p className="mt-3 font-sub text-gray-300 font-normal">
          {project.description}
        </p>
      </div>
    );
  });
  return (
    <div className="w-full md:grid md:grid-cols-2 md:gap-20 h-auto mt-20 pb-20">
      {projects}
    </div>
  );
};
export default projects;
