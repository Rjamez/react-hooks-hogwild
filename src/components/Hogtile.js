
import React from 'react';

const HogTile = ({ hog, onClick }) => {
  return (
    <div className="ui eight wide column" onClick={() => onClick(hog)}>
      <div className="ui card">
        <div className="image">
          <img src={hog.image} alt={hog.name} />
        </div>
        <div className="content">
          <h3 className="header">{hog.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default HogTile;
