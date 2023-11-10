import React, { useState, useEffect } from 'react';

export const GeoLocation = () => {
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (error) => {
            console.error('Error getting geolocation:', error.message);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
  }, []);

  console.log(latitude);
  console.log(longitude);

  return (
    <div>
      
    </div>
  );
};
