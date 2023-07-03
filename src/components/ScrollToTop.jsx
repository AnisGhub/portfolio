import { React, useEffect, useState } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showScroll]);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <FiChevronUp
      className="scrollToTop"
      onClick={backToTop}
      style={{
        height: 45,
        width: 45,
        borderRadius: 50,
        position: 'fixed',
        right: 50,
        bottom: 50,
        display: showScroll ? 'flex' : 'none',
        padding: 5,
      }}
    />
  );
}

export default ScrollToTop;
