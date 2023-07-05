import React, { useContext } from 'react';
import { ProjectContext } from '../../store/ProjectContext';

function ProjectInfo() {
  const { selectedProject } = useContext(ProjectContext);
  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single project client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {selectedProject.ProjectInfo.infoHeading}
          </p>
          <ul className="leading-loose">
            {selectedProject.ProjectInfo.infoBody.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  {info.url ? (
                    <span>
                      <a href={info.url} className="text-primary-dark dark:text-primary-light">
                        <span>{info.details}</span>
                      </a>
                    </span>
                  ) : (
                    <span>{info.details}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single project Role */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {selectedProject.ProjectInfo.RoleHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {selectedProject.ProjectInfo.RoleDetails}
          </p>
        </div>

        {/* Single project technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {selectedProject.ProjectInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {selectedProject.ProjectInfo.Technologies[0].techs.join(', ')}
          </p>
        </div>
      </div>

      {/*  Single project right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {selectedProject.ProjectInfo.MissionHeading}
        </p>
        {selectedProject.ProjectInfo.MissionDetails.map((details) => {
          return (
            <p
              key={details.id}
              className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
            >
              {details.details}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectInfo;
