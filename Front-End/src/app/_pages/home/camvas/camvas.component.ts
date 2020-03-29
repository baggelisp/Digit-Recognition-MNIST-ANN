import {
  Component, Input, ElementRef, AfterViewInit, ViewChild, OnInit, Output, EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs';

import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
@Component({
  selector: 'app-camvas',
  templateUrl: './camvas.component.html',
  styleUrls: ['./camvas.component.scss']
})
export class CamvasComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  ctx

  constructor() { }

  @Input() public width = 420;
  @Input() public height = 420;

  @Output() drawnCanvas = new EventEmitter();

  ngOnInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');

    canvasEl.width = this.width;
    canvasEl.height = this.height;

    this.ctx.lineWidth = 30;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#000';

    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    fromEvent(canvasEl, 'mousedown')
    .pipe(
      switchMap((e) => {
        return fromEvent(canvasEl, 'mousemove')
          .pipe(
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            pairwise() /* Return the previous and last values as array */
          )
      })
    ).subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
  
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
  
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
  
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(prevPos: { x: number, y: number }, currentPos: { x: number, y: number }) {
    if (!this.ctx) { return; }

    this.ctx.beginPath();

    if (prevPos) {
      this.ctx.moveTo(prevPos.x, prevPos.y); // from
      this.ctx.lineTo(currentPos.x, currentPos.y);
      this.ctx.stroke();
    }
  }

  cleanCanvas(){
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  submitButton(){

    var imgd = this.ctx.getImageData( 0, 0, this.width, this.height);
    // create array of pixels
    // if pixel is black the cell in array is 1
    // if pixel is white the cell in array is 0
    let dataBlack = []
    for (var i = 0, n = imgd.data.length; i < n; i += 4) {
      if (imgd.data[i  ] == 0 && imgd.data[i+1] == 0 && imgd.data[i+2]==0  && imgd.data[i+3]==255){
        dataBlack.push(1)
      } else {
        dataBlack.push(0)
      }
    }
    this.drawnCanvas.emit({ data: dataBlack });

    // len of data black is 400x400 = 160000
  }



}
