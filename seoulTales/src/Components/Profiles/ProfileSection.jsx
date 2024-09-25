import React, { useState } from 'react';
import './ProfileSection.css';

function ProfileSection({ actors, onSelectActor }) {
  const [showAll, setShowAll] = useState(false);
  const profilesToShow = showAll ? actors : actors.slice(0, 8); // Show 3 profiles initially

  console.log("Profiles to show:", profilesToShow);
  return (
    <div className="profile-section">
      <h2>Actors</h2>
      <div className="profile-grid">
        {profilesToShow.map((actor, index) => (
          <div 
            className="profile-item" 
            key={index} 
            onClick={() => onSelectActor(actor)}
          >
            <img src={actor.photo} alt={actor.name} />
            <p>{actor.name} </p>
          </div>
        ))}
      </div>
      {!showAll && (
        <button className="show-more-button" onClick={() => setShowAll(true)}>
          Show More
        </button>
      )}
    </div>
  );
}

export default ProfileSection;


