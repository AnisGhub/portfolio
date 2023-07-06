import React from 'react';

// eslint-disable-next-line react/prop-types
function Toast({ onClose }) {
  return (
    <div className="fixed bottom-11 left-0 w-full">
      <div className="container mx-auto sticky bottom-11 left-0 w-full animate-slide-up">
        <div className="p-4 bg-indigo-50 rounded-lg shadow opacity-90">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg flex items-center justify-center mr-2">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
              </svg>
              <span className="sr-only">Warning icon</span>
            </div>
            <div className="font-general-medium text-md sm:text-lg text-gray-500">
              Mon portfolio est toujours en constante amélioration avec des mises à jour régulières.
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8"
              aria-label="Close"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
