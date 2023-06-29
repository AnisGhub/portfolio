import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { projectsData } from '../data/projects';

export const ProjectContext = createContext();

export function ProjectProvider({ children, projectId }) {
  const selectedProject = useMemo(
    () => projectsData.find((project) => project.id === parseInt(projectId, 10)) || null,
    [projectId]
  );
  const relatedProjects = useMemo(
    () =>
      selectedProject
        ? projectsData.filter(
            (project) =>
              project.category === selectedProject.category && project.id !== selectedProject.id
          )
        : [],
    [selectedProject]
  );

  const contextValue = useMemo(
    () => ({
      selectedProject,
      relatedProjects,
    }),
    [selectedProject, relatedProjects]
  );
  return <ProjectContext.Provider value={contextValue}>{children}</ProjectContext.Provider>;
}
ProjectProvider.propTypes = {
  children: PropTypes.node.isRequired,
  projectId: PropTypes.string.isRequired,
};
