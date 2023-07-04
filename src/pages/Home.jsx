import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBanner from '../components/AppBanner';
import { ProjectsProvider } from '../store/ProjectsContext';
import Button from '../components/ui/Button';
import ProjectsGrid from '../components/projects/ProjectsGrid';

function Home() {
  return (
    <div className="container mx-auto">
      <AppBanner />

      <ProjectsProvider isHomePage>
        <ProjectsGrid />
      </ProjectsProvider>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <NavLink
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          aria-label="More Projects"
        >
          <Button title="Parcourir d'autres réalisations" />
        </NavLink>
      </div>
    </div>
  );
}
export default Home;
