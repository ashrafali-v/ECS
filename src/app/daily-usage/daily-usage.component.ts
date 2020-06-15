import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-usage',
  templateUrl: './daily-usage.component.html',
  styleUrls: ['./daily-usage.component.scss']
})

export class DailyUsageComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  myColors: any = [
    { name: 'upto average', value: '#bfbfbf' },
    {name:'usage',value:'#395cc6'},
    { name: 'exceed average', value: '#fd7e14' }
  ];
  view: any[] = [400, 300];
  chartDataAmount: any;
  chartDataKwh:any;

  constructor() { }

  ngOnInit(): void {
      this.chartDataAmount = [
        {
          'name': 21,
          'series': [
            {
              'name': 'usage',
              'value': 10
            },
            {
              'name': 'exceed average',
              'value': 5
            }
          ]
        },
        {
          'name': 22,
          'series': [
            {
              'name': 'usage',
              'value': 10
            },
            {
              'name': 'exceed average',
              'value': 3
            }
          ]
        },
        {
          'name': 23,
          'series': [
            {
              'name': 'usage',
              'value': 8
            },
            {
              'name': 'upto average',
              'value': 2
            }
          ]
        },{
          'name': 24,
          'series': [
            {
              'name': 'usage',
              'value': 10
            },
            {
              'name': 'exceed average',
              'value': 1
            }
          ]
        },{
          'name': 25,
          'series': [
            {
              'name': 'usage',
              'value': 5
            },
            {
              'name': 'upto average',
              'value': 5
            }
          ]
        },{
          'name': 26,
          'series': [
            {
              'name': 'usage',
              'value': 10
            },
            {
              'name': 'exceed average',
              'value': 4
            }
          ]
        },
        {
          'name': 27,
          'series': [
            {
              'name': 'usage',
              'value': 0
            },
            {
              'name': 'upto average',
              'value': 10
            }
          ]
        },
        {
          'name': 28,
          'series': [
            {
              'name': 'usage',
              'value': 0
            },
            {
              'name': 'upto average',
              'value': 10
            }
          ]
        },
        {
          'name': 29,
          'series': [
            {
              'name': 'usage',
              'value': 0
            },
            {
              'name': 'upto average',
              'value': 10
            }
          ]
        }
        
      ];
      this.chartDataKwh = [
        {
          'name': 21,
          'series': [
            {
              'name': 'usage',
              'value': 30
            },
            {
              'name': 'exceed average',
              'value': 10
            }
          ]
        },
        {
          'name': 22,
          'series': [
            {
              'name': 'usage',
              'value': 30
            },
            {
              'name': 'exceed average',
              'value': 5
            }
          ]
        },
        {
          'name': 23,
          'series': [
            {
              'name': 'usage',
              'value': 25
            },
            {
              'name': 'upto average',
              'value': 5
            }
          ]
        },{
          'name': 24,
          'series': [
            {
              'name': 'usage',
              'value': 30
            },
            {
              'name': 'exceed average',
              'value': 15
            }
          ]
        },{
          'name': 25,
          'series': [
            {
              'name': 'usage',
              'value': 15
            },
            {
              'name': 'upto average',
              'value': 15
            }
          ]
        },{
          'name': 26,
          'series': [
            {
              'name': 'usage',
              'value': 30
            },
            {
              'name': 'exceed average',
              'value': 4
            }
          ]
        },
        {
          'name': 27,
          'series': [
            {
              'name': 'usage',
              'value': 0
            },
            {
              'name': 'upto average',
              'value': 30
            }
          ]
        },
        {
          'name': 28,
          'series': [
            {
              'name': 'usage',
              'value': 0
            },
            {
              'name': 'upto average',
              'value': 30
            }
          ]
        },
        {
          'name': 29,
          'series': [
            {
              'name': 'usage',
              'value': 0
            },
            {
              'name': 'upto average',
              'value': 30
            }
          ]
        }
        
      ];
  
  }
  handleSelected($event) {
    if ($event.target.checked === true) {
      this.amount = false;
      this.kilowats = true;
    } else {
      this.amount = true;
      this.kilowats = false;
    }
  }
  currencyTickFormatting(val: any) {
    return '$' + val.toLocaleString();
  }
  kwhTickFormatting(val: any) {
    return val.toLocaleString() + ' kWh';
  }

}
