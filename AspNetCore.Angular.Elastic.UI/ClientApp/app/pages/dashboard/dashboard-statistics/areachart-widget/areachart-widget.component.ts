import { AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {Chart} from 'chart.js';
import { areachartWidgetData } from './areachart-widget.data';

@Component({
  selector: 'vr-areachart-widget',
  templateUrl: './areachart-widget.component.html'
})
export class AreachartWidgetComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvas: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const ctx = this.canvas.nativeElement.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: areachartWidgetData,
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              stacked: true,
              gridLines: {
                color: '#F7F7F7'
              }
            }],
            yAxes: [{
              stacked: true,
              gridLines: {
                color: '#F7F7F7'
              },
            }]
          },
          legend: {
            display: false
          },
          tooltips: {
            mode: 'index',
            intersect: false
          },
        }
      });
    }
  }

}
