import React from 'react';
import './ActorDetail.css';

function ActorDetail({ actor, onBack }) {
    console.log("Actor Detail Props:", actor)

  if (!actor || !actor.dramas) {
    return <div>No details available for this actor.</div>;
  }

  return (
    <div className="actor-detail">
      <button className="back-button" onClick={onBack}>Back to Profiles</button>
      <h2>{actor.name}</h2>
      <img src={actor.photo} alt={actor.name} className="actor-photo" />
      <h3>Dramas</h3>
      {actor.dramas.length > 0 ? (
        <div className="drama-list">
          {actor.dramas.map((drama, index) => (
            <div key={index} className="drama-item">
              <h4>{drama.name}</h4>
              {drama.image && <img src={drama.image} alt={drama.name} className="drama-image" />}
            </div>
          ))}
        </div>
      ) : (
        <p>No dramas available for this actor.</p>
      )}
    </div>
  );
}

export default ActorDetail;



