import React from 'react'; //import React library

/* Your code goes here */
export function TableHeader({columnNames}) {
    return (
        <thead>
            <tr>
                {columnNames.map(col => {
                    return <th key={col}>{col}</th>;
                })}
            </tr>
        </thead>
    );
}