import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import * as senators from './data/senators.json';

//render the App component here!
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App senatorsList={Array.from(senators)}/>)

