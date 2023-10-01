import React from 'react'
import {Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const UsingCharts = () => {
    const charData = {
        labels : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets : [{
            label : 'No  of Orders',
            data : [56,126,79,213,294,240,294],
            backgroundColor: '#f00'
        }]
    }
  return (
    <div className=''container>
        <h1>Using Bar Charts</h1>
        <hr />
        <Bar data= {charData} />
    </div>
  )
}

export default UsingCharts