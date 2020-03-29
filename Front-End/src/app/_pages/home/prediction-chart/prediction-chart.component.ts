import { Component, OnInit , Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-prediction-chart',
  templateUrl: './prediction-chart.component.html',
  styleUrls: ['./prediction-chart.component.scss']
})
export class PredictionChartComponent implements OnInit {

  @Input() predictions;

  constructor() { }

  public doughnutChartLabels = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9'];
  public doughnutChartData = [10,10,10,10,10,10,10,10,10,10];
  public doughnutChartType = 'doughnut';

  ngOnInit(): void {
   // console.log('Inside chart', this.predictions)
    //this.doughnutChartData = this.predictions.map(x => x * 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    //const currentItem: SimpleChange = changes.item;
    if (changes.predictions.currentValue){
      let predString = changes.predictions.currentValue;
      predString = predString.replace('[','')
      predString = predString.replace(']','')
      let predArray = predString.split(' ')
      //console.log(predArray)
      // console.log(predString)
      // console.log(typeof predString)
      //predString = predString.replace('[','')
    }
    //console.log('prev value: ', changes.predictions.currentValue);
    //console.log('got item: ', currentItem.currentValue);
  }

}
