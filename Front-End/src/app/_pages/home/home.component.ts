import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../_services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataBlack;
  prediction;
  tranformedData;

  constructor(private requestsService: RequestsService) { }

  ngOnInit(): void {
  }

  drawnCanvasChange(event){
    this.dataBlack = event.data
    this.requestOnBackEnd()
  }

  requestOnBackEnd(){
    // prepare request
    const body = {
      data:  this.dataBlack
    }
    this.requestsService.postRequest(body).subscribe(res =>{
      this.prediction = res.predictedValue;
      this.tranformedData = res.tranformedData.map(x => x.map( a => a / 255));
    })
  }

}
