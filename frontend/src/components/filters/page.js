'use client';

import React, { useState } from 'react';
import SearchSubmenu from '../Search/SearchSubmenu';
import ButtonSearch from '../Search/ButtonSearch';

const Filters = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [gastronomyOpen, setGastronomyOpen] = useState(false);
  const [hospitalityOpen, setHospitalityOpen] = useState(false);

  const toggleActivities = () => setActivitiesOpen(!activitiesOpen);
  const toggleGastronomy = () => setGastronomyOpen(!gastronomyOpen);
  const toggleHospitality = () => setHospitalityOpen(!hospitalityOpen);

  return (
    <div className="bg-gray-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-evenly space-x-4">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleActivities}
            >
              Activities
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414L9.586 4l4.293 4.293a1 1 0 010 1.414l-4.293 4.293-4.293-4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {activitiesOpen && (
              <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Daytime</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Nighttime</button>
                </div>
              </div>
            )}
          </div>

          <div className="relative inline-block text-left">
            {/* <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleGastronomy}
            >
              Gastronomy
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414L9.586 4l4.293 4.293a1 1 0 010 1.414l-4.293 4.293-4.293-4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button> */}

            <ButtonSearch fx={toggleGastronomy}>
              Gastronomia
            </ButtonSearch>
            {gastronomyOpen && /* (
              <div className="origin-top-left  z-50 absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button className="w-full  z-50 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Rating: Low to High</button>
                  <button className="w-full  z-50 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Rating: High to Low</button>
                </div>
              </div>
            ) */
            <SearchSubmenu 
            textOpc1={"opcion 1"}
            fxOpc1={()=> console.log("hace click opcion 1")}

            textOpc2={"opcion 2"}
            fxOpc2={()=> console.log("hace click opcion 2")}

            opc3={true}
            textOpc3={"opcion 3"}
            fxOpc3={()=> console.log("hace click opcion 3")}
            ></SearchSubmenu>
            }
          </div>

          <div className="relative inline-block text-left">
            <button
              type="button"
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={toggleHospitality}
            >
              Hotels
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.707a1 1 0 010-1.414L9.586 4l4.293 4.293a1 1 0 010 1.414l-4.293 4.293-4.293-4.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {hospitalityOpen && (
              <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Stars: Low to High</button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Stars: High to Low</button>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Filters;
