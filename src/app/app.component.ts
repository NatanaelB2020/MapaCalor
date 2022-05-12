import { Component } from '@angular/core';
import { productSalesMulti } from '../Data/produtos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productSalesMulti!: number [];
  view: [number, number] = [700, 300];

  // optionsS
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'product';
  yAxisLabel: string = 'sales';

  colorScheme = {
    domain: ['#fc88ab', '#fc6d98', '#ff477f', '#ff3371', '#ff2165', '#ff004e']
  };
  title: any;

  constructor() {
    Object.assign(this, { productSalesMulti });
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
