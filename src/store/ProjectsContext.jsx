import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { projectsData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export function ProjectsProvider({ children }) {
  const [projects, setProjects] = useState(projectsData);
  const [searchProject, setSearchProject] = useState('');
  const [selectProject, setSelectProject] = useState('');

  // Search projects by project title
  const searchProjectsByTitle = useMemo(() => {
    return projects.filter(
      (item) =>
        item.title.toLowerCase().includes(searchProject.toLowerCase()) || searchProject === ''
    );
  }, [projects, searchProject]);

  // Select projects by project category
  const selectProjectsByCategory = useMemo(() => {
    return projects.filter((item) => {
      const category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
      return category.includes(selectProject);
    });
  }, [projects, selectProject]);

  const projectsContextValue = useMemo(
    () => ({
      projects,
      setProjects,
      searchProject,
      setSearchProject,
      searchProjectsByTitle,
      selectProject,
      setSelectProject,
      selectProjectsByCategory,
    }),
    [
      projects,
      setProjects,
      searchProject,
      setSearchProject,
      searchProjectsByTitle,
      selectProject,
      setSelectProject,
      selectProjectsByCategory,
    ]
  );

  return (
    <ProjectsContext.Provider value={projectsContextValue}>{children}</ProjectsContext.Provider>
  );
}
ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
