import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProjectSingle({ title, category, image }) {
  return (
    <div>
      <NavLink to="/projects/single-project" aria-label="Single Project">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img src={image} className="rounded-t-xl border-none" alt="Single Project" />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">{category}</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
ProjectSingle.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default ProjectSingle;
