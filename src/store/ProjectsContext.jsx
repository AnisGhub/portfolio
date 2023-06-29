import React, { useState, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { projectsData } from '../data/projects';

// Create projects context
export const ProjectsContext = createContext();

// Create the projects context provider
export function ProjectsProvider({ children, isHomePage = false }) {
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

  // Sort projects by publish date for home page
  const sortedProjects = useMemo(() => {
    return projects.sort((a, b) => {
      const dateA = new Date(a.ProjectHeader.publishDate);
      const dateB = new Date(b.ProjectHeader.publishDate);
      return dateB - dateA;
    });
  }, [projects]);

  const projectsContextValue = useMemo(() => {
    return {
      isHomePage,
      projects: isHomePage ? sortedProjects.slice(0, 3) : projects,
      setProjects,
      ...(isHomePage
        ? {}
        : {
            searchProject,
            setSearchProject,
            searchProjectsByTitle,
            selectProject,
            setSelectProject,
            selectProjectsByCategory,
          }),
    };
  }, [
    isHomePage,
    projects,
    sortedProjects,
    setProjects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  ]);

  return (
    <ProjectsContext.Provider value={projectsContextValue}>{children}</ProjectsContext.Provider>
  );
}
ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isHomePage: PropTypes.bool,
};
ProjectsProvider.defaultProps = {
  isHomePage: false,
};
