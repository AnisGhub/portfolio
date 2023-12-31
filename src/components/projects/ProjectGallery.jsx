import React, { useContext } from 'react';
import { ProjectContext } from '../../store/ProjectContext';

function ProjectGallery() {
  const { selectedProject } = useContext(ProjectContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {selectedProject.ProjectImages.map((project) => {
        return (
          <div className="mb-10 sm:mb-0" key={project.id}>
            <img
              src={project.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none sm:h-[140px] lg:h-[200px] xl:h-[260px] w-full object-fill"
              alt={project.title}
              key={project.id}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProjectGallery;
