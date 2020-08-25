import React from 'react';

export function Table (props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Consumptions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        props.data.map(row => {
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.consumption}</td>
                            </tr>
                        })
                    } */}
                </tbody>
            </table>
        </div>
    )
}