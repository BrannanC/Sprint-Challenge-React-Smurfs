import React from 'react';

const SmurfDetails = props => {
    let smurf = {};
    props.smurfs ? smurf = props.smurfs.find(x => `${x.id}` === props.match.params.id) : smurf = {name: 'No smurf found'};
    console.log(smurf);
  return (
    <div className="Smurf">
      <h3>{smurf.name}</h3>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
    </div>
  );
};

export default SmurfDetails;