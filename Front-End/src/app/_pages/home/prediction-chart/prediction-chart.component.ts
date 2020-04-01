import { Component, OnInit , Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-prediction-chart',
  templateUrl: './prediction-chart.component.html',
  styleUrls: ['./prediction-chart.component.scss']
})
export class PredictionChartComponent implements OnInit {

  @Input() predictions;

  predictionNumber;

  constructor() { }

  public pieChartLabels: Label[] =['Number 0', 'Number 1', 'Number 2', 'Number 3','Number 4', 'Number 5', 'Number 6', 'Number 7', 'Number 8', 'Number 9'];
  public pieChartData = [10,10,10,10,10,10,10,10,10,10];
  public pieChartType: ChartType =  'pie';
  public pieChartLegend = true;
  public pieChartOptions = {
    legend: {
      position: 'left'
    },
    title: {
      display: true,
      text: 'Prediction (%)'
    }
  }

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[] = [
    { data: [10,10,10,10,10,10,10,10,10,10], label: 'Prediction (%)' },
  ];


  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.predictions.currentValue){
      let predString = changes.predictions.currentValue;
      predString = predString.replace('[','')
      predString = predString.replace(']','')
      let predArray = predString.split(' ').filter(elem => elem != '');
      predArray = predArray.map(x => x = parseFloat(x).toFixed(4));
      this.predictionNumber = this.rIndexOfMaxElem(predArray);
      this.pieChartData = predArray.map(x => x * 100);
      this.barChartData = [
        { data: this.pieChartData, label: 'Prediction (%)' },
      ];
    }
  }

  rIndexOfMaxElem(matrix){
    let i;
    let max = -1;
    let indMax = -1;
    for (i = 0; i < matrix.length; i++) {
      if (matrix[i] > max) { 
        max = matrix[i];
        indMax = i;
      }
    }
    return indMax;
  }

}
