'use client';

import React, { useState } from 'react';
import SearchSubmenu from '../Search/SearchSubmenu';
import ButtonSearch from '../Search/ButtonSearch';
import Subtitle from '../texts/Subtitle';

const Filters = () => {
  const [activitiesOpen, setActivitiesOpen] = useState(false);
  const [gastronomyOpen, setGastronomyOpen] = useState(false);
  const [hospitalityOpen, setHospitalityOpen] = useState(false);

  const toggleActivities = () => setActivitiesOpen(!activitiesOpen);
  const toggleGastronomy = () => setGastronomyOpen(!gastronomyOpen);
  const toggleHospitality = () => setHospitalityOpen(!hospitalityOpen);

  return (
    <div className="bg-gray-100/70 w-full lg:max-w-4xl mx-auto backdrop-blur-md rounded-3xl sm:rounded-full p-4">

      <div className=' text-center text-3xl'>
        <Subtitle> <em>Te recomendamos</em> </Subtitle>
      </div>

      <hr className=' mt-2 mb-3 w-10/12 flex mx-auto' />

      {/* Botones de Filtros */}
      <div className=' flex flex-wrap justify-center gap-3 lg:gap-6'>
        <div className=" ">
          <ButtonSearch fx={() => console.log("hace click en todos")}>
            Todos
          </ButtonSearch>
        </div>

        <div className=" relative inline-block text-left">
          <ButtonSearch fx={toggleHospitality}>
            Hospedaje
          </ButtonSearch>
          {hospitalityOpen && (
            <SearchSubmenu
              textOpc1={"Rating 5 a 1 ⭐"}
              fxOpc1={() => console.log("hace click opcion 1")}

              textOpc2={"Rating 1 a 5 ⭐"}
              fxOpc2={() => console.log("hace click opcion 2")}
            >
            </SearchSubmenu>
          )}
        </div>
        
        <div className="relative inline-block text-left">
          <ButtonSearch fx={toggleGastronomy}>
            Gastronomia
          </ButtonSearch>
        
          {gastronomyOpen && (
            <SearchSubmenu
            textOpc1={"Rating 5 a 1 ⭐"}
            fxOpc1={() => console.log("hace click opcion 1")}

            textOpc2={"Rating 1 a 5 ⭐"}
            fxOpc2={() => console.log("hace click opcion 2")}
          >
            </SearchSubmenu>
          )}
        </div>
        
        <div className=" relative inline-block text-left">
          <ButtonSearch fx={toggleActivities}>
            Actividades
          </ButtonSearch>

          {activitiesOpen && (
            <SearchSubmenu
            textOpc1={"Diurnas ☀️"}
            fxOpc1={() => console.log("hace click opcion 1")}

            textOpc2={"Nocturnas 🌙"}
            fxOpc2={() => console.log("hace click opcion 2")}
          >
            </SearchSubmenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
