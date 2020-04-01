import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../_services/requests.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataBlack;
  prediction;
  tranformedData;
  errorMessage: string;

  constructor(private requestsService: RequestsService, private spinner: NgxSpinnerService) { }

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
    this.spinner.show();
    this.requestsService.postRequest(body).subscribe(res =>{
      this.spinner.hide();
      this.prediction = res.predictedValue;
      this.tranformedData = res.tranformedData.map(x => x.map( a => a + 0.5));
    },
    error => {
      this.spinner.hide();
      this.errorMessage = 'There was an error...Please try again later.'
    })
  }

  closeAlert() {
    this.errorMessage = null;
  }
}
