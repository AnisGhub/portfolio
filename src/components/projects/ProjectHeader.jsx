import React, { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import { ProjectContext } from '../../store/ProjectContext';

function ProjectHeader() {
  const { selectedProject } = useContext(ProjectContext);

  return (
    <div>
      <p className="font-nunito-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {selectedProject.ProjectHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-nunito-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {selectedProject.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-nunito-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {selectedProject.ProjectHeader.tags}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;