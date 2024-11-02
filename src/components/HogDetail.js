import React from 'react';

const HogDetail = ({ hog }) => {
  if (!hog) return null; // Render nothing if no hog is selected

  return (
    <div className="ui segment">
      <h2>{hog.name}</h2>
      <p>Specialty: {hog.specialty}</p>
      <p>Weight: {hog.weight}</p>
      <p>Greased: {hog.greased ? "Yes" : "No"}</p>
      <p>Highest Medal Achieved: {hog.highestMedal}</p>
    </div>
  );
};

export default HogDetail;
