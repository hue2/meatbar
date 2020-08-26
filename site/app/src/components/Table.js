import React from 'react';

export const Table = (props) => {
    const { data, onRowClick, activeId } = props;

    return (
        <div className="card table-wrapper">
            <p id="table-title">Number of consumptions per consumer</p>
            <div className="table-responsive pad-10">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Consumptions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.length > 0 && data.map(row => (
                                <tr key={row.id} 
                                    className={row.id === activeId ? "active" : ""} 
                                    onClick={() => onRowClick(row.id)}
                                >
                                    <td>{row.name}</td>
                                    <td>{row.total}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}