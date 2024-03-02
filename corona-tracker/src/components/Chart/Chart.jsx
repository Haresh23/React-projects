import React from "react";
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto'


const Charts = (Chartdat) => {
    console.log(Chartdat)
    let Chartdata = [];
    Chartdata = Chartdat.Chartdat;
    if (Chartdat === null) {
        return (
            <h3>Loading....</h3>
        )
    }
    return (
        (Chartdata.length !== 0)
            ? <Line
                data={{
                    labels: Chartdata.map((data) => new Date(data.date).toLocaleDateString()),
                    datasets: [{
                        data: Chartdata.map((data) => data.positive),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: 'true',
                    }, {
                        data: Chartdata.map((data) => data.negative),
                        label: 'Recovered',
                        borderColor: 'rgba(0,255,0,0.5)',
                        fill: 'true',
                    }, {
                        data: Chartdata.map((data) => data.death),
                        label: 'Infected',
                        borderColor: 'rgba(255,0,0,0.5)',
                        fill: 'true',
                    }
                    ]
                }}
            />
            : (
                <h1>No Data Available</h1>
            )
    );
}

export default Charts;