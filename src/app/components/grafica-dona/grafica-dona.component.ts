import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {
  //@Input() data: any = 50;
  @Input() chartLabels: Label[] = [];
  @Input() chartData: MultiDataSet =   [];
  @Input() chartType: ChartType;
  constructor() { }

  ngOnInit() {
  }

}

