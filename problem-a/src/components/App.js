import React from 'react'; //import React library
import { SenatorTable } from './SenatorTable';

/* Your code goes here */
export function App() {
    return (
        <div className="container">
            <h1>"US Senators (Jan 2022)"</h1>
            <SenatorTable />
        </div>
    );
}
