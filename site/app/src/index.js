import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

google.charts.load('current', {
    packages:['corechart'],
});
//only render the app after google chart is loaded
google.charts.setOnLoadCallback(init);

function init() {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};