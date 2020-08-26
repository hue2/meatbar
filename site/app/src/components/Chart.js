import React, { useEffect } from 'react';

export const Chart = (props) => {
    const { data, person } = props;

    useEffect(() => {       
        drawChart();       
    }, [data]);

    function drawChart() {
        let table = google.visualization.arrayToDataTable(
            [
                ['Meat', 'Percentage'],
                ...data,
            ]
        );
    
        let options = {
            legend: {
                position: 'top',
            },
            width: 550,
            height: 480, 
            chartArea: {
                width: '80%',
                height: '70%',
                top: 70,
            }               
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(table, options);
    }

    return (
        <div className='card wrapper'>
            <div className='card-title'>Meat consumed by {person}</div>
            <div id='chart_div'>
            </div>
        </div>
    )
}