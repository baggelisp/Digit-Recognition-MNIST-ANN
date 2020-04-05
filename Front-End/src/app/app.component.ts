import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare let gtag:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Front-End';
  constructor(private router: Router){
    router.events.subscribe((y: NavigationEnd) => {
      if(y instanceof NavigationEnd){
        gtag('config','UA-162875101-1',{'page_path' : y.url});
      }
    })
  }
}
