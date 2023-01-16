import './Graph.css'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
)

function CovidLineGraph () {
  const data1 = {
    labels: ["January", "February", "March" ,"April", "May", "June","July", "August", "September","October", "November", "December"],
    datasets: [{
      data: [26,41,52,35,33,46,48,59,45,46,40,39],
      backgroundColor: 'transparent',
      borderColor: 'blue',
      pointBorderColor: 'transparent',
      pointBorderWidth: 4,
      tension: 0.4
    }]
  };
  const data2 = {
    labels: ["January", "February", "March" ,"April", "May", "June","July", "August", "September","October", "November", "December"],
    datasets: [{
      data: [126,101,132,145,83,96,57,49,25,16,20,9],
      backgroundColor: 'transparent',
      borderColor: 'red',
      pointBorderColor: 'transparent',
      pointBorderWidth: 4,
      tension: 0.4
    }]
  };
const options ={
plugins: {
  legend: true
},
scales: {
x: {
  grid: {
    display: true
  }
},
y: {
  min: 2,
  max: 10,
  ticks: {
    stepsize: 2,
    callback: (value) => value + 'k'
  },
  grid: {
    borderDash: [10]
}
}
} //49
};
  return (
    <div className="graph">
      <Line data={data1} option={options}></Line>
    </div>
  );
}
export default CovidLineGraph