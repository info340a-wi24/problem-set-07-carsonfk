import React from 'react';
import { AboutNav } from './Navigation';
import { BreedNav } from './Navigation';
import _ from 'lodash';

function App(props) {
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
            <BreedNav breeds={Object.keys(_.groupBy(props.pets, 'breed'))} />
            <AboutNav />
          </div> 

          <div id="petList" className="col-9">
          
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
