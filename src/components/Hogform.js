import React, { useState } from 'react';

const HogForm = ({ addHog }) => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [weight, setWeight] = useState('');
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = {
      name,
      specialty,
      weight: parseFloat(weight),
      greased,
      highestMedal,
      image: 'default_image_url.jpg' // Replace with a default or user input for image
    };
    addHog(newHog);
    // Reset form fields
    setName('');
    setSpecialty('');
    setWeight('');
    setGreased(false);
    setHighestMedal('');
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h3>Add a New Hog</h3>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={greased}
            onChange={() => setGreased(!greased)}
          />
          Greased
        </label>
      </div>
      <div className="field">
        <label>Highest Medal Achieved</label>
        <input
          type="text"
          value={highestMedal}
          onChange={(e) => setHighestMedal(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="ui button">Add Hog</button>
    </form>
  );
};

export default HogForm;
