/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";

const UserLocation = (props) => {
   const [locationData, setLocationData] = useState(null);
   const [location, setLocation] = useState(
      localStorage.getItem("defaultLocation") || ""
   );
   const [searchCity, setSearchCity] = useState(localStorage.getItem("city"));

   const [isEditing, setIsEditing] = useState(false);

   useEffect(() => {
      const fetchWeatherData = async () => {
         try {
            let lat; let lon; let city;
            if (location && location.trim() !== "") {
               // Use the stored location if it exists and is not empty
               const response = await axios.get(
                  // `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=fa159c10afad1b327c67736381f2ca89`
                  `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=dad8a4bff4e94297b57418fe52ef1dc5`
               );
               lat = response.data.coord.lat;
               lon = response.data.coord.lon;
            } else {
               // Get the user's current location
               const position = await new Promise((resolve, reject) => {
                  navigator.geolocation.getCurrentPosition(resolve, reject);
               });
               lat = position.coords.latitude;
               lon = position.coords.longitude;

               // Use the API location as the default location
               const response = await axios.get(
                  // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa159c10afad1b327c67736381f2ca89`
                  `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=dad8a4bff4e94297b57418fe52ef1dc5`
                  // `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyB0gzgkBMKOmMBPgV3sTQN6z1F9I6bNLlI`
               );
               setLocation(
                  localStorage.setItem(
                     "defaultLocation",
                     response.data.results[0].components.city
                  )
               );
            }
            const response = await axios.get(
               // `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa159c10afad1b327c67736381f2ca89`
               `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=dad8a4bff4e94297b57418fe52ef1dc5`
               // `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=AIzaSyB0gzgkBMKOmMBPgV3sTQN6z1F9I6bNLlI`
            );
            setLocationData(response.data);
         } catch (error) {
            console.log(error.message);
         }
      };
      fetchWeatherData();
   }, [location]);

   const handleLocationChange = (event) => {
      const newLocation = event.target.value;
      setLocation(newLocation);

      if (newLocation === "") {
         localStorage.removeItem("defaultLocation");
      } else {
         localStorage.setItem("defaultLocation", newLocation);
      }
   };

   const handleMouseEnter = () => {
      // setIsEditing(true);
   };

   const handleMouseLeave = () => {
      // setIsEditing(false);
   };

   const handleSubmit = (event) => {
      event.preventDefault();
      // Fetch weather data for the new location
      setLocation(location.trim());
      setIsEditing(false);
   };

   useEffect(() => {
      if (isEditing) {
         opencage.algoliaAutocomplete({
            container: "#geoAutocomplete",

            plugins: [
               opencage.OpenCageGeoSearchPlugin(
                  {
                     key: "oc_gs_codependemo74gzf48ew7fdvs91nba",
                     countrycode: "in",
                  },
                  // optional event handlers:
                  {
                     onSelect: function handleSelect(params) {
                        localStorage.setItem("city", params.item.formatted);
                        setSearchCity(params.item.formatted);
                        const latlng = [
                           params.item.geometry.lat,
                           params.item.geometry.lng,
                        ];
                        // do something with the coords
                     },
                     onSubmit: function handleSubmit(params) {
                        // Do something with the selected and then submitted value
                     },
                  }
               ),
            ],
         });
      }
   }, [isEditing]);

   return (
      <div className='user-locatio'>
         {isEditing ? (
            <>
               <div id='geoAutocomplete' onMouseLeave={handleMouseLeave} />
               {/* <form onSubmit={handleSubmit}>
               <input
                  className='userLocInput'
                  type='text'
                  placeholder='Enter location'
                  value={location}
                  onChange={handleLocationChange}
                  onMouseLeave={handleMouseLeave}
               />
               <button
                  type='submit'
                  onClick={handleSubmit}
                  className='userLocationSaveBtn'>
                  Save
               </button>
            </form> */}
            </>
         ) : (
            <>
               <i
                  onMouseEnter={handleMouseEnter}
                  className='fa-solid fa-location-dot px-2'
                  style={{ fontSize: "15px" }} />
               {locationData && (
                  <div className='float-start' style={{ paddingTop: "3px" }}>
                     <div>
                        {locationData.results[0].components.suburb} &nbsp;
                        {locationData.results[0].components.city} &nbsp;
                        {locationData.results[0].components.postcode}
                     </div>
                  </div>
               )}

               <span>{searchCity}</span>
            </>
         )}
      </div>
   );
};

export default UserLocation;
