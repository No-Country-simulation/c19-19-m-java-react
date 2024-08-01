'use client';

import React, { useState } from 'react';
import axios from 'axios';
import SearchSubmenu from '../Search/SearchSubmenu';
import ButtonSearch from '../Search/ButtonSearch';
import Subtitle from '../texts/Subtitle';

const Filters = ({ setFilteredResults }) => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [gastronomyOpen, setGastronomyOpen] = useState(false);
  const [hospitalityOpen, setHospitalityOpen] = useState(false);

  const toggleActivities = () => setActivitiesOpen(!activitiesOpen);
  const toggleGastronomy = () => setGastronomyOpen(!gastronomyOpen);
  const toggleHospitality = () => setHospitalityOpen(!hospitalityOpen);

  const fetchFilteredResults = async (type, ratingOrder) => {
    try {
      const response = await axios.get('http://localhost:3001/post', {
        params: {
          type,
          ratingOrder,
        },
      });
      setFilteredResults(response.data.data.post);
    } catch (error) {
      console.error("Error fetching filtered results:", error);
    }
  };

  return (
    <div className="bg-gray-100/70 w-full lg:max-w-4xl mx-auto backdrop-blur-md rounded-3xl sm:rounded-full p-4">
      
        <Subtitle styleAdd='text-center italic'>Te recomendamos</Subtitle>
      

      <hr className=' mt-2 mb-3 w-10/12 flex mx-auto' />

      <div className=' flex flex-wrap justify-center gap-3 lg:gap-6'>
        <div className="">
          <ButtonSearch fx={() => fetchFilteredResults()}>
            Todos
          </ButtonSearch>
        </div>

        <div className="relative inline-block text-left">
          <ButtonSearch fx={toggleHospitality}>
            Hospedaje
          </ButtonSearch>
          {hospitalityOpen && (
            <SearchSubmenu
              textOpc1={"Rating 5 a 1 ⭐"}
              fxOpc1={() => fetchFilteredResults('hotel', 'desc')}
              textOpc2={"Rating 1 a 5 ⭐"}
              fxOpc2={() => fetchFilteredResults('hotel', 'asc')}
            />
          )}
        </div>

        <div className="relative inline-block text-left">
          <ButtonSearch fx={toggleGastronomy}>
            Gastronomia
          </ButtonSearch>
          {gastronomyOpen && (
            <SearchSubmenu
              textOpc1={"Rating 5 a 1 ⭐"}
              fxOpc1={() => fetchFilteredResults('restaurante', 'desc')}
              textOpc2={"Rating 1 a 5 ⭐"}
              fxOpc2={() => fetchFilteredResults('restaurante', 'asc')}
            />
          )}
        </div>

        <div className="relative inline-block text-left">
          <ButtonSearch fx={toggleActivities}>
            Actividades
          </ButtonSearch>
          {activitiesOpen && (
            <SearchSubmenu
              textOpc1={"Rating 5 a 1 ⭐"}
              fxOpc1={() => fetchFilteredResults('actividad', 'desc')}
              textOpc2={"Rating 1 a 5 ⭐"}
              fxOpc2={() => fetchFilteredResults('actividad', 'asc')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;

