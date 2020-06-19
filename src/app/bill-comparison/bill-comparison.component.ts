import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-comparison',
  templateUrl: './bill-comparison.component.html',
  styleUrls: ['./bill-comparison.component.scss']
})
export class BillComparisonComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number;
  kilowatsValue: number;
  colorScheme:any;
  view: any[] = [200, 300];
  multiAmount: any[];
  multikwh: any[];
  constructor() { }

  ngOnInit(): void {
    this.amountValue = 128;
    this.kilowatsValue = 185;
    var multiAmount = [
      {
        "name": "22",
        "value": 12
      },
      {
        "name": "23",
        "value": 7
      },
      {
        "name": "24",
        "value": 13
      }
    ]
    this.colorScheme = {
      domain: ['blue', 'orange', 'blue']
    };
    Object.assign(this, { multiAmount });
  }
}
