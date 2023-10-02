import React from 'react'
import {Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);
const UsingCharts = () => {
    const chartData = {
        labels : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets : [{
            label : 'No  of Orders',
            data : [56,126,79,213,294,240,294],
            backgroundColor: '#f00',
            borderColor: '#00f'
        }]
    }
  return (
    <div className='container'>
        <h1>Using Bar Charts</h1>
        <hr />
        <Bar data= {chartData} />
        <Line data={chartData} />
    </div>
  )
}

export default UsingCharts