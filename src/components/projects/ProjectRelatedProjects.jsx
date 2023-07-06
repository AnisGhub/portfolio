import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ProjectContext } from '../../store/ProjectContext';

function ProjectRelatedProjects() {
  const { relatedProjects } = useContext(ProjectContext);

  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      {relatedProjects.length > 0 && (
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
          Autres Projets qui pourraient vous intéresser
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {relatedProjects.map((project) => {
          return (
            <NavLink to={`/projects/project/${project.id}`} key={project.id}>
              <img
                src={project.img}
                className="rounded-xl cursor-pointer h-full w-full"
                alt={project.title}
                key={project.id}
              />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectRelatedProjects;
