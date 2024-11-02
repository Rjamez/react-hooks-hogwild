import React, { useState } from 'react';
import hogsData from './porkers_data'; 
import Nav from './components/Nav'; 
import HogTile from './components/HogTile'; 
import HogDetail from './components/HogDetail'; 

const App = () => {
  const [hogs, setHogs] = useState(hogsData);
  const [selectedHog, setSelectedHog] = useState(null);

  const handleHogClick = (hog) => {
    setSelectedHog(hog);
  };

  return (
    <div>
      <Nav />
      <div className="ui grid container">
        {hogs.map(hog => (
          <HogTile key={hog.name} hog={hog} onClick={handleHogClick} />
        ))}
      </div>
      {selectedHog && <HogDetail hog={selectedHog} />}
    </div>
  );
};

export default App;
