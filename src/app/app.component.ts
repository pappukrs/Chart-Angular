import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';
Chart.register(...registerables);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'chart';

  fetchData = async () => {
    const data = await axios(
      'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd'
    );
    console.log('data_crypto_received is:', data);
  };

  ngOnInit() {
    this.fetchData();
    const datasets = [
      {
        label: '# of child Born in china',
        data: [120, 150, 200, 250, 300, 350, 400, 450, 500, 550],
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        backgroundColor: 'blue',
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 2,
      },
      {
        label: '# of child Born in India',
        data: [100, 160, 220, 280, 340, 420, 500],
        // backgroundColor: [
        //   'rgba(255, 99, 132, 0.2)',
        //   'rgba(54, 162, 235, 0.2)',
        //   'rgba(255, 206, 86, 0.2)',
        //   'rgba(75, 192, 192, 0.2)',
        //   'rgba(153, 102, 255, 0.2)',
        //   'rgba(255, 159, 64, 0.2)',
        // ],
        backgroundColor: 'limegreen',
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 2,
      },
    ];
    const data = {
      labels: ['2011', '2012', '2013', '2014', '2015', '2016'],
      datasets: datasets,
    };

    const options: any = {
      scales: {
        y: { beginAtZero: true },
      },
      aspectRatio: 2.5,
    };

    const chartData: any = {
      type: 'bar',
      data: data,
      options: options,
    };
    new Chart('myChart', chartData);
  }
}
