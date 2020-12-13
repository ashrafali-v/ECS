import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";
import { CommonAppService } from '../services/common-app.service';
@Component({
  selector: 'app-daily-usage',
  templateUrl: './daily-usage.component.html',
  styleUrls: ['./daily-usage.component.scss']
})

export class DailyUsageComponent implements OnInit {
  amount: boolean = true;
  kilowats: boolean = false;
  amountValue: number;
  kilowatsValue: number;
  webStatus: boolean = false;
  month: any;
  day: any;
  screenHeight: number;
  screenWidth: number;
  // myColors: any = [
  //   { name: 'upto average', value: 'rgba(48,45,52,.2)' },
  //   { name: 'usage', value: '#7033FF' },
  //   { name: 'exceed average', value: '#F16F3F' }
  // ];
  myColors: any = [
    { name: 'upto average', value: 'rgba(3,155,229,.2)' },
    { name: 'usage', value: '#039be5' },
    { name: 'exceed average', value: '#039be5' }
  ];
  width: any;
  barPadding: number = 20;
  view: any;
  chartDataAmount: any;
  chartDataKwh: any;
  chartDataAmountSection: any;
  chartDataKwhSection: any;
  nextCount: any = 1;
  prevCount: any = 1;
  nextCountStatus: boolean = true;
  prevCountStatus: boolean = false;
  customTransform: any;
  monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  hourlyUsage:any=[];
  sixHoursData:any=[];
  twelveHoursData:any=[];
  eighteenHoursData:any=[];
  twentyfourHoursData:any=[];
  hourlyMonthName:any;
  hourlyDay:any;
  currentDay:any;
  hourlyDate:any;
  dateIndex:any = 0;
  loader: boolean = true;
  monthlyDataLoader: boolean = true;
  isHourlyUsageEmpty:boolean = false;
  accountType:any;
  gasUnit:any;
  gasSwitchText:any;
  chartDataAmountMonthly:any = [];
  chartDataKwhMonthly:any = [];
  multiAmount: any[];
  constructor(private sharedService: CommonAppService) {
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 1400) {
      this.webStatus = true;
      this.width = 1024;
      this.barPadding = 20;
      this.view = [this.width, 300];
      this.chartDataAmountSection = this.chartDataAmount;
      this.chartDataKwhSection = this.chartDataKwh;
    } else if (this.screenWidth > 993) {
      this.webStatus = true;
      this.width = 860;
      this.barPadding = 20;
      this.view = [this.width, 180];
      this.chartDataAmountSection = this.chartDataAmount;
      this.chartDataKwhSection = this.chartDataKwh;
    } else {
      this.webStatus = false;
      this.width = 360;
      this.barPadding = 25;
      this.view = [this.width, 180];
      this.chartDataAmountSection = this.chartDataAmount.slice(0, 10);
      this.chartDataKwhSection = this.chartDataKwh.slice(0, 10);
    }
  }

  ngOnInit(): void {
    this.accountType = localStorage.accountType;
    this.gasUnit = localStorage.gasUnit;
    this.gasSwitchText = localStorage.gasSwitchText;
    console.log(this.gasSwitchText);
    this.multiAmount = [{name: "NOV19", value: 70.19},{name: "DEC19", value: 76.46},{month: "JAN20", value: 70.75},{name: "FEB20", value: 67.86},
    {name: "MAR20", value: 72.19},
    {name: "APR20", value: 65.18},
    {name: "MAY20", value: 75.13},
    {name: "JUN20", value: 69.88},
    {name: "JUL20", value: 76.21},
    {name: "AUG20", value: 75.89},
    {name: "SEP20", value: 70.94},
    {name: "OCT20", value: 73.97},
    {name: "NOV20", value: 71.29}];
    Object.assign(this.multiAmount);
    var today = new Date();
    this.currentDay = today.getDate();
    this.sharedService.getDailyUsage().subscribe(data => {
      this.loader = false;
      var day = new Date();
      this.month = this.monthNames[day.getMonth()];
      this.day = day.getDate();
      this.customTransform = `translate(-35 , 0)`;
      this.amountValue = data.totalUsageAmount;
      this.kilowatsValue = data.totalUsageKwh;
      // this.chartDataAmountMonthly = [
      //   {
      //     'name': "NOV19",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 5.19
      //       }
      //     ],
      //     date:"12 01 2020"
      //   },
      //   {
      //     'name': "DEC19",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 11.1
      //       }
      //     ],
      //     date:"12 02 2020"
      //   },
      //   {
      //     'name': "JAN20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 5.75
      //       }
      //     ]
      //   }, {
      //     'name': "FEB20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 2.86
      //       }
      //     ]
      //   }, {
      //     'name': "MAR20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 7.19
      //       }
      //     ]
      //   }, {
      //     'name': "APR20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 0.18
      //       }
      //     ]
      //   },
      //   {
      //     'name': "MAY20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 10.13
      //       }
      //     ]
      //   },
      //   {
      //     'name': "JUN20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 4.88
      //       }
      //     ]
      //   },
      //   {
      //     'name': "JUL20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 11.21
      //       }
      //     ]
      //   },
      //   {
      //     'name': "AUG20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 10.89
      //       }
      //     ]
      //   },
      //   {
      //     'name': "SEP20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 10.94
      //       }
      //     ]
      //   },
      //   {
      //     'name': "OCT20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 8.97
      //       }
      //     ]
      //   },
      //   {
      //     'name': "NOV20",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 65
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 6.29
      //       }
      //     ]
      //   } //{
      //   //   'name': 14,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 1
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 15,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 5
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 16,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 4
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 17,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 18,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 19,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 20,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 21,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 22,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 3
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 23,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 8
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 2
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 24,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 1
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 25,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 5
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 26,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 4
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 27,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 28,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 29,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 30,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 31,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 10
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // }
      // ];
      // this.chartDataKwhMonthly = [
      //   {
      //     'name': "JAN",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 10
      //       }
      //     ]
      //   },
      //   {
      //     'name': "FEB",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 1
      //       }
      //     ]
      //   },
      //   {
      //     'name': "MAR",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 5
      //       }
      //     ]
      //   }, {
      //     'name': "APR",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 15
      //       }
      //     ]
      //   }, {
      //     'name': "MAY",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 15
      //       }
      //     ]
      //   }, {
      //     'name': "JUN",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 4
      //       }
      //     ]
      //   },
      //   {
      //     'name': "JUL",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 7
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 0
      //       }
      //     ]
      //   },
      //   {
      //     'name': "AUG",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 10
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 0
      //       }
      //     ]
      //   },
      //   {
      //     'name': "SEP",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 9
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 0
      //       }
      //     ]
      //   },
      //   {
      //     'name': "OCT",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 10
      //       }
      //     ]
      //   },
      //   {
      //     'name': "NOV",
      //     'series': [
      //       {
      //         'name': 'usage',
      //         'value': 30
      //       },
      //       {
      //         'name': 'exceed average',
      //         'value': 7
      //       }
      //     ]
      //   },
      //   // {
      //   //   'name': 12,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 25
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 13,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 15
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 14,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 15
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 15
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 15,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 4
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 16,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 17,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 18,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 19,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 10
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 20,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 21,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 22,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 23,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 25
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 5
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 24,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 15
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 25,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 15
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 15
      //   //     }
      //   //   ]
      //   // }, {
      //   //   'name': 26,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 30
      //   //     },
      //   //     {
      //   //       'name': 'exceed average',
      //   //       'value': 4
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 27,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 28,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 29,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 30,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // },
      //   // {
      //   //   'name': 31,
      //   //   'series': [
      //   //     {
      //   //       'name': 'usage',
      //   //       'value': 0
      //   //     },
      //   //     {
      //   //       'name': 'upto average',
      //   //       'value': 30
      //   //     }
      //   //   ]
      //   // }

      // ];
      this.chartDataAmount = data.usageAmount;
      this.chartDataKwh = data.usageKwh;
      this.hourlyDate = this.chartDataAmount[0].name;
      this.getHourlyUsageData(this.chartDataAmount[0].date);
      this.getScreenSize();
    });
    this.sharedService.getMonthlyUSage().subscribe(data => {
      this.chartDataAmountMonthly = data.usageAmount;
      this.chartDataKwhMonthly = data.usageKwh;
    });
    this.sharedService.nextMessage("amount");
  }
  handleSelected($event) {
    if ($event.target.checked === true) {
      this.amount = false;
      this.kilowats = true;
      this.sharedService.nextMessage("kilowats");
    } else {
      this.amount = true;
      this.kilowats = false;
      this.sharedService.nextMessage("amount");
    }
  }
  currencyTickFormatting(val: any) {
    return '$' + val.toLocaleString();
  }
  kwhTickFormatting(val: any) {
    return val.toLocaleString() + 'kWh';
  }
  kwhTickFormattingGas(val: any) {
    return val.toLocaleString() + 'ccf';
  }
  selectDailyUsageData(key: any) {
    //Next and previuos button handling//
    if (key == 'next') {
      if (this.nextCount <= 3) {
        /*Enable prev button*/
        this.prevCountStatus = true;
        /**/
        /*Calculating array start and end based on next button click*/
        let arrayStart = 0 + (this.nextCount) * 10;
        let arrayEnd = 10 * (this.nextCount + 1);

        /*Calculating array start and end based on next button click*/
        if (this.nextCount == 2) {
          this.nextCountStatus = false;
          arrayEnd = 31;
        }

        /*Get the sliced array for display*/
        this.chartDataAmountSection = this.chartDataAmount.slice(arrayStart, arrayEnd);
        this.chartDataKwhSection = this.chartDataKwh.slice(arrayStart, arrayEnd);
        this.nextCount += 1;
        console.log('Next ->' + arrayStart + ' ' + arrayEnd);

      }
    } else {
      this.nextCount -= 1;
      this.nextCountStatus = true;
      let arrayStartPrev = 0 + (this.nextCount - 1) * 10;
      let arrayEndPrev = 10 * (this.nextCount);
      this.chartDataAmountSection = this.chartDataAmount.slice(arrayStartPrev, arrayEndPrev);
      this.chartDataKwhSection = this.chartDataKwh.slice(arrayStartPrev, arrayEndPrev);
      if (arrayStartPrev == 0) {
        this.prevCountStatus = false;
      }
      console.log('Next ->' + arrayStartPrev + ' ' + arrayEndPrev);
    }
  }
  prevDayData(){
    this.dateIndex += 1;
    //this.hourlyDate = this.chartDataAmount[this.dateIndex].name;
    this.hourlyDate = this.chartDataAmount[this.dateIndex].name;
    this.getHourlyUsageData(this.chartDataAmount[this.dateIndex].date);
  }
  nextDayData(){
    this.dateIndex -= 1;
    //this.hourlyDate = this.chartDataAmount[this.dateIndex].name;
    this.hourlyDate = this.chartDataAmount[this.dateIndex].name;
    this.getHourlyUsageData(this.chartDataAmount[this.dateIndex].date);
  }
  getHourlyUsageData(date:any){
    // var c = date.split(" ");
    // var dateValue = {'day':c[1],'month':c[0],'year':c[2]}
    this.sharedService.getHourlyUsage(date).subscribe(data => {
      if(Object.keys(data).length === 0 && data.constructor === Object ){
        this.isHourlyUsageEmpty = true;
      }
      
      this.hourlyUsage = data;
      this.sixHoursData = this.hourlyUsage.firstset;
      this.twelveHoursData = this.hourlyUsage.secondset;
      this.eighteenHoursData = this.hourlyUsage.thirdset;
      this.twentyfourHoursData = this.hourlyUsage.fourthset;
    });
  }
}
