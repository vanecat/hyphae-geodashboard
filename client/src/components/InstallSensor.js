import React, {useEffect, useState} from 'react';

import GeoLocator from './sensors/GeoLocator';

const InstallSensor = ({sensor, onSave, onCancel}) => {

  const [location, setLocation] = useState(null);
  const [isEditLocation, setEditLocation] = useState(false);

  const handleLocationSet = (lngLat) => {
    setLocation(lngLat);
    setEditLocation(false);
  };

  useEffect(() => {
    if (location) {
      onSave({...sensor, ...location}); // spread the lng/lat into the sensor copy
    }
  }, [location]);


  const handleLocationEdit = () => {
    setEditLocation(s=>!s);
  };

  const handlePhotoAdd = () => {};

  return <div>
    <h2>Sensor Installation</h2>

    <h3>Location</h3>
    <div>{!!location && <span>Longitude: {location.lng}, Latitude: {location.lat}</span>} <a href='#' onClick={handleLocationEdit}>{!!location ? 'Edit':'Add Location'}</a></div>
    {isEditLocation && <GeoLocator onDone={handleLocationSet} initialValue={location}/>}

    <h3>Photos of Sensor as Installed</h3>
    <button onClick={handlePhotoAdd}>Add Photo</button>
  </div>
}

export default InstallSensor;