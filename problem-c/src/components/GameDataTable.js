import React, { useState } from 'react'; //import React Component

import _ from 'lodash'; //import external library!

export default function GameDataTable(props) {
  let data = props.data;

  //Your state and event work goes here
  const [sortByCriteria, setSort] = useState(null);
  const [isAscending, setAscending] = useState(null);

  function handleClick(click) {
    if (click.currentTarget.name != sortByCriteria) {
      setSort(click.currentTarget.name);
      setAscending(true);
    } else {
      if (isAscending){
        setAscending(false);
      } else {
        setAscending(null);
        setSort(null);
      }
    }
  }

  if (sortByCriteria != null) {
    data = _.sortBy(data, sortByCriteria);
    if (!isAscending) {
      data = _.reverse(data);
    }
  }

  //Map the `props.data` value into an array of `<GameDataRow>` elements here
  let rows = data.map((temp) => {
    return <GameDataRow key={temp.year} gameObj={temp}></GameDataRow>
  });

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>
              Year
              <SortButton name="year" onClick={handleClick} active={"year" == sortByCriteria} ascending={"year" == sortByCriteria && isAscending}/>
            </th>
            <th className="text-end">
              Winner
              <SortButton name="winner" onClick={handleClick} active={"winner" == sortByCriteria} ascending={"winner" == sortByCriteria && isAscending}/>
            </th>
            <th className="text-center" >
              Score
              <SortButton name="score" onClick={handleClick} active={"score" == sortByCriteria} ascending={"score" == sortByCriteria && isAscending}/>
            </th>
            <th>
              Runner-Up
              <SortButton name="runner_up" onClick={handleClick} active={"runner_up" == sortByCriteria} ascending={"runner_up" == sortByCriteria && isAscending}/>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}

//Component for managing display logic of sort button
//Props: 
//  `active` [boolean] if icon should be highlighted,
//  `ascending` [boolean] if icon should be in ascending order (flipped)
//  `onClick` [function] click handler (passthrough)
function SortButton(props) {
  let iconClasses = ""
  if (props.active) { iconClasses += ` active` }
  if (props.ascending) { iconClasses += ` flip` };

  return (
    <button className="btn btn-sm btn-sort" name={props.name} onClick={props.onClick}>
      <span className={"material-icons" + iconClasses} aria-label={`sort by ${props.name}`}>sort</span>
    </button>
  );
}

function GameDataRow({ gameObj }) { //gameObj = props.gameObj
  return (
    <tr>
      <td>{gameObj.year}</td>
      <td className="text-end">{gameObj.winner} {gameObj.winner_flag}</td>
      <td className="text-center">{gameObj.score}</td>
      <td>{gameObj.runner_up_flag}&nbsp;&nbsp;{gameObj.runner_up}</td>
    </tr>
  );
}
