import React, { useEffect } from 'react';

export const Chart = (props) => {
    const { data, person } = props;

    useEffect(() => {       
        google.charts.setOnLoadCallback(drawChart);
    }, [data]);

    function drawChart() {
        let table = google.visualization.arrayToDataTable(
            [
                ['Meat', 'Percentage'],
                ...data,
            ]
        );
    
        let options = {
            title: `Meat consumed by ${person ? person.name: ''}`,
            width: 600,
            height: 500,
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(table, options);
    }

    return (
        <div id='chart_div'>
        </div>
    )
}