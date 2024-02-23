import React, { useState } from 'react';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import _ from 'lodash';
import PetList from './PetList';

function App(props) {
  const [pets, setPets] = useState(props.pets);
  //console.log(pets)
  function adoptPet(name) {
    let newState = pets.map((temp) => { 
      let copy = {...temp};  
      //console.log(temp.name)  
      //console.log(name)  
      if (copy.name == name) {
        copy.adopted = true;
        //console.log(copy);
        return copy;
      } else {
        return copy;
      }
    });
    setPets(newState);
  }
  return (
    <body>
      <header className="jumbotron jumbotron-fluid py-4">
        <div className="container">
          <h1>Adopt a Pet</h1>
        </div>
      </header>

      <main className="container">
        <div className="row">
          <div id="navs" className="col-3">
            <BreedNav breeds={Object.keys(_.groupBy(pets, 'breed'))} />
            <AboutNav />
          </div> 

          <div id="petList" className="col-9">
            <PetList pets={pets} adoptCallback={adoptPet} />
          </div>
        </div>
      </main>

      <footer className="container">
        <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
      </footer>
    </body>
  );
}

export default App;
