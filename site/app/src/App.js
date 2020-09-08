import React, { useEffect, useState } from 'react';

import { getPeople, getBarTypes, getConsumption } from './api/Api';
import { Title } from './components/Title';
import { Table } from './components/Table';
import { Chart } from './components/Chart';
import './css/common.css';

export function App() {
    const [people, setPeople] = useState([]);
    const [bartypes, setBarTypes] = useState([]);
    const [consumption, setConsumption] = useState([]);
    const [selectedPersonId, setselectedPersonId] = useState(0);

    useEffect(() => {
        function fetchData() {
            try {
                return Promise.all([
                    getPeople(),
                    getBarTypes(),
                    getConsumption()
                ]).then(([peopleResponse, bartypesResponse, consumptionResponse]) => {
                    setPeople(peopleResponse);
                    setBarTypes(bartypesResponse);
                    setConsumption(consumptionResponse);
                    setselectedPersonId(peopleResponse[0].id);             
                });
            }
            catch(err) {      
            }
        }

        fetchData();
    }, []);

    function getTableData() {
        let result = [];
        people.map(x => {
            let total = consumption.filter(e => e.personId === x.id).length;
            result.push(
                { 
                    id: x.id, 
                    name: x.name,
                    total,
                }
            )
        });
        return result;
    };

    function getChartData() {
        let result = [];
        bartypes.map(x => {
            let consumptionForPerson = consumption.filter(e => e.personId === selectedPersonId && e.barTypeId === x.id).length;
            result.push(
                [
                    x.name,
                    consumptionForPerson
                ]
            );               
        });      

        return result;
    }

    function getSelected(personId) {
        setselectedPersonId(personId);
        getChartData();
    }

    function getPersonName() {
        let person = people.find(x => x.id === selectedPersonId);
        return person ? person.name : '';
    }

    return (
        <div className='container'>
            <Title />    
            <hr className='m-top-10'/> 
                <div className='row'>
                    <div className='col-lg-6'>
                        <Table
                            data={getTableData()}
                            onRowClick={getSelected}
                            selectedId={selectedPersonId}
                        />
                    </div>
                    <div className='col-lg-6'>              
                        <Chart 
                            column={bartypes}
                            data={getChartData()}
                            person={getPersonName()}
                        />
                    </div>
                </div>          
        </div>
    )
};
