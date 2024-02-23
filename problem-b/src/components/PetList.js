import React from 'react';

export function PetCard({petData, adoptCallback}) {
    let h = petData.name;
    //console.log(1)
    let displayedName = petData.name;
    if (petData.adopted == true) {
        displayedName += " (Adopted)";
    }
    return (
        <div className="card" onClick={() => adoptCallback(petData.name)}>
            <img className="card-img-top" src={petData.img} alt={petData.name} />
            <div className="card-body">
                <h3 className="card-title">{displayedName}</h3>
                <p className="card-text">{petData.sex + " " + petData.breed}</p>
            </div>
        </div>
    );
}

export default function PetList({pets, adoptCallback}) {
    return (
        <div>
            <h2>Dogs for Adoption</h2>
        
    
            <div className="card-deck">
                {pets.map(temp => {
                    return <PetCard key = {temp.name} adoptCallback={adoptCallback} petData={temp} />         
                })}
            </div> 
        </div>
    );
}