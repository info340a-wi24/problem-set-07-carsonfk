import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';
import _ from 'lodash';

function App(props) {
  let displayed;

  //Your work goes here
  const [filterCriteria, setCriteria] = useState(['', false]);

  //console.log(filterCriteria)
  if (filterCriteria[0] == '') {
    displayed = props.gameData;
  } else {
    if (filterCriteria[1]) {
      displayed = _.filter(props.gameData, ['winner', filterCriteria[0]]).concat(_.filter(props.gameData, ['runner_up', filterCriteria[0]]));
    } else {
      displayed = _.filter(props.gameData, ['winner', filterCriteria[0]]);
    }
    //console.log(displayed);
  }

  function applyFilter(select, includeRU) {
    setCriteria([select, includeRU]);
  }

  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>
    
      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilter={applyFilter}/>
        <GameDataTable data={displayed} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
