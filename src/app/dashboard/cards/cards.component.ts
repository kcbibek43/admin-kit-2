import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cardDetails = [
    {
      topbar : "Sales",
      icon : "fa fa-truck",
      num : "2.382",
      precent : "-3.65% ",
      bottombar : "Since last week",
      class : "text-danger"
    },
    {
      topbar : "Earnings",
      icon : "fa fa-dollar",
      num : "$21.300",
      precent : "6.65% ",
      bottombar : "Since last week",
      class : "text-success"
    },
    {
      topbar : "Visitors",
      icon : "fa fa-users",
      num : "14.212",
      precent : "5.25%",
      bottombar : "Since last week",
      class : "text-success"
    },

    {
      topbar : "Orders",
      icon : "fa fa-shopping-cart",
      num : "64",
      precent : "-2.25%",
      bottombar : "Since last week",
      class : "text-danger"
    }
   ]


   public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    datasets: [
      {
        data: [ 2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917,3321],
        label: 'Series A',
        fill: true,
        tension: 0.5,
        borderColor: 'DodgerBlue',
        backgroundColor: 'rgb(123,216,235)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
