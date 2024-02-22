import React from 'react'; //import React library

//example senator data objects:
// { id: 'C000127', name: 'Maria Cantwell', state: 'WA', party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
// { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }

/* Your code goes here */
export function SenatorRow({senatorData}) {
    return (
        <tr>
            <td key={senatorData.name}>{senatorData.name}</td>
            <td key={senatorData.state}>{senatorData.party[0] + " - " + senatorData.state}</td>
            <td key={senatorData.phone}><a href={"tel:" + senatorData.phone}>{senatorData.phone}</a></td>
            <td key={senatorData.twitter}><a href={"https://twitter.com/" + senatorData.twitter}>{"@" + senatorData.twitter}</a></td>
        </tr>
    );
}