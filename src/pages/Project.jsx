import React from 'react';
import { useParams } from 'react-router-dom';
import { ProjectProvider } from '../store/ProjectContext';
import ProjectHeader from '../components/projects/ProjectHeader';
import ProjectGallery from '../components/projects/ProjectGallery';
import ProjectInfo from '../components/projects/ProjectInfo';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects';

function Project() {
  // get project id from url
  const { id } = useParams();
  // get project data from project id

  return (
    <div className="container mx-auto mt-5 sm:mt-10">
      <ProjectProvider projectId={id}>
        <ProjectHeader />
        <ProjectGallery />
        <ProjectInfo />
        <ProjectRelatedProjects />
      </ProjectProvider>
    </div>
  );
}
export default Project;
