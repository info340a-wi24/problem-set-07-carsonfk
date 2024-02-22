import React from 'react';

export function PetCard({petData}) {
    return (
        <div className="card">
            <img className="card-img-top" src="img/069b8257-f9db-4034-908f-12b8cea76693.jpg" alt={petData.name} />
            <div className="card-body">
                <h3 className="card-title">{petData.name}</h3>
                <p className="card-text">{petData.sex + " " + petData.breed}</p>
            </div>
        </div>
    );
}