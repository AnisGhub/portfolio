import { useState, useEffect } from 'react';

/**
 * Custom hook for theme switching.
 * @returns {Array} An array containing the current theme and a function to toggle between themes.
 */
const useThemeSwitcher = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    // Remove the class of the previous theme and add the class of the new theme to the root of the application.
    root.classList.remove(theme === 'dark' ? 'light' : 'dark');
    root.classList.add(theme);
    // Save the current theme to local storage.
    localStorage.setItem('theme', theme);
  }, [theme]);

  /**
   * Function to toggle between themes.
   */
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return [theme, toggleTheme];
};

export default useThemeSwitcher;
