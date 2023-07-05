import React, { useContext } from 'react';
import { FiClock, FiTag } from 'react-icons/fi';
import moment from 'moment';
import { ProjectContext } from '../../store/ProjectContext';
import 'moment/locale/fr';

moment.locale('fr');

function ProjectHeader() {
  const { selectedProject } = useContext(ProjectContext);

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {selectedProject.ProjectHeader.title}
      </p>
      <div className="flex flex-col sm:flex-row">
        <div className="flex items-center mr-10 mb-5 sm:mb-0">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {moment(selectedProject.ProjectHeader.publishDate).format('LL')}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          {selectedProject.ProjectHeader.tags.map((tag) => (
            <span
              key={tag}
              className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectHeader;
