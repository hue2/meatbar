import React from 'react';

export const Table = (props) => {
    const { data, onRowClick, selectedId } = props;

    return (
        <div className='card wrapper'>
            <div className='card-title'>Number of consumptions per consumer</div>
            <div className='table-responsive pad-10'>
                <table className='table table-hover'>
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
                                    className={(row.id === selectedId) ? 'active' : ''} 
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