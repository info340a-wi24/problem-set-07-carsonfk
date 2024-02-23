import React, { useState } from 'react'; //import React Component

export default function TeamSelectForm(props) {

  //Your work goes here
  const [select, setSelect] = useState('');
  const [includeRU, setInclude] = useState(false);

  function handleSelect(change) {
    if (change.target.value != select) {
      setSelect(change.target.value);
    } 
  }

  function handleInput(change) {
    if (change.target.checked != includeRU) {
      setInclude(change.target.checked);
    } 
  }

  function click() {
    props.applyFilter(select, includeRU)
  }

  const optionElems = props.teamOptions.map((teamName) => {
    return <option key={teamName} value={teamName}>{teamName}</option>
  })

  return (
    <div className="row align-items-center mb-3">
      <div className="col-auto">
        <select id="teamSelect" className="form-select" value={select} onChange={handleSelect}>
          <option value="">Show all teams</option>
          {optionElems}
        </select>
      </div>
      <div className="col-auto">
        <div className="form-check">
          <input id="runnerupCheckbox" type="checkbox" className="form-check-input" value="" checked={includeRU} onChange={handleInput}/>
          <label htmlFor="runnerupCheckbox" className="form-check-label">Include runner-up</label>
        </div>
      </div>
      <div className="col-auto">
        <button id="submitButton" type="submit" className="btn btn-warning" onClick={() => click()}>Apply Filter</button>
      </div>
    </div>
  );
}