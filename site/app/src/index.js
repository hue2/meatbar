import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

google.charts.load("current", {packages:["corechart"]});

ReactDOM.render(
    <App />,
    document.getElementById('root')
);