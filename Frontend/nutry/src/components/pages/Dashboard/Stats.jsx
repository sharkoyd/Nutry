
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Card } from 'primereact/card';

export default function Stats() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [stats, setStats] = useState({});
    //get the data from http://localhost:80/api/base/getStats.php

    function createChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const data = {
            labels: ['Protein', 'Fat', 'Sugar', 'Fiber', 'Cholesterol', 'Sodiun'],
            datasets: [
                {
                    label: 'value in grams',
                    borderColor: documentStyle.getPropertyValue('--pink-400'),
                    pointBackgroundColor: documentStyle.getPropertyValue('--blue-400'),
                    pointBorderColor: documentStyle.getPropertyValue('--pink-00'),
                    pointHoverBackgroundColor: textColor,
                    pointHoverBorderColor: documentStyle.getPropertyValue('--bluegray-400'),
                    data: [stats.protein, stats.fat, stats.sugar, stats.fiber, stats.cholesterol, stats.sodium]
                },

            ]
        };
        const options = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
                , title: {
                    display: true,
                    text: 'Your meals Nutrition Statistics',
                    position: 'bottom',
                    font: {
                        size: 20
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: textColorSecondary
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }



    useEffect(() => {
        fetch('http://localhost:80/api/base/getStats.php', { method: 'GET', credentials: 'include' }) // replace with your actual API endpoint
            .then(response => response.json())
            .then(data => setStats(data))
            .catch(error => console.error('Error:', error));
    }, []);

    useEffect(() => {
        createChart();
    }
        , [stats]);


    return (
        <div className="card " style={{ display: 'flex', flexDirection: 'row', }}>
            <div style={{ width: '50%' }}>
                <Card className='card' title="Daily Caloric Intake" style={{width:'50%',margin:"10px",display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <p className="m-0" style={{textAlign:'center'}}>
                        {stats.calories} kcal
                    </p>
                </Card>
                {/* incoming cards */}

                
            </div>
            <div style={{ width: '50%' }}>

                <Chart type="radar" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
