import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})

export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Games';
  showYAxisLabel = true;
  yAxisLabel = 'Votes';

  colorScheme = 'nightLights';

  constructor() {}

  ngOnDestroy() {

    // clearInterval(this.interval);
  }

  onSelect(event) {
    console.log(event);
  }

}
