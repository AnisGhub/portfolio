import React from 'react';
import PropTypes from 'prop-types';

const selectOptions = ['Training', 'Professional', 'Personal', 'Commercial'];

function ProjectsFilter({ setSelectProject }) {
  const handleSelectChange = (e) => {
    const { value } = e.target;
    if (value === 'all') {
      setSelectProject(null);
    } else {
      setSelectProject(value);
    }
  };

  return (
    <select
      onChange={handleSelectChange}
      className="font-general-medium px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
    >
      <option value="all" className="text-sm sm:text-md">
        All Projects
      </option>
      {selectOptions.map((option) => (
        <option className="text-normal sm:text-md" key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

ProjectsFilter.propTypes = {
  setSelectProject: PropTypes.func.isRequired,
};

export default ProjectsFilter;
