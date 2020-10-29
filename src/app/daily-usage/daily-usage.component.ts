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
  myColors: any = [
    { name: 'upto average', value: 'rgba(48,45,52,.2)' },
    { name: 'usage', value: '#7033FF' },
    { name: 'exceed average', value: '#F16F3F' }
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
      this.width = 960;
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
    var yesterday = new Date(Date.now() - 864e5);
    var day = yesterday.getDate();
    var month = yesterday.getMonth()+1;
    var year = yesterday.getFullYear();
    var date = {day,month,year};
    this.hourlyMonthName = this.monthNames[month-1];
    this.hourlyDay = yesterday.getDate();
    console.log(date);
    
    this.sharedService.getHourlyUsage(date).subscribe(data => {
      this.hourlyUsage = data;
      this.sixHoursData = this.hourlyUsage.firstset;
      this.twelveHoursData = this.hourlyUsage.secondset;
      this.eighteenHoursData = this.hourlyUsage.thirdset;
      this.twentyfourHoursData = this.hourlyUsage.fourthset;
    });
    this.sharedService.getDailyUsage().subscribe(data => {
      var day = new Date();
      this.month = this.monthNames[day.getMonth()];
      this.day = day.getDate();
      this.customTransform = `translate(-35 , 0)`;
      this.amountValue = data.totalUsageAmount;
      this.kilowatsValue = data.totalUsageKwh;
      this.chartDataAmount = [
        {
          'name': 1,
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
          'name': 2,
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
          'name': 3,
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
        }, {
          'name': 4,
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
        }, {
          'name': 5,
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
        }, {
          'name': 6,
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
          'name': 7,
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
          'name': 8,
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
          'name': 9,
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
          'name': 10,
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
          'name': 11,
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
          'name': 12,
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
          'name': 13,
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
        }, {
          'name': 14,
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
        }, {
          'name': 15,
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
        }, {
          'name': 16,
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
          'name': 17,
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
          'name': 18,
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
          'name': 19,
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
          'name': 20,
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
        }, {
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
        }, {
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
        }, {
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
        },
        {
          'name': 30,
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
          'name': 31,
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
        }
      ];
      this.chartDataKwh = [
        {
          'name': 1,
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
          'name': 2,
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
          'name': 3,
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
        }, {
          'name': 4,
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
        }, {
          'name': 5,
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
        }, {
          'name': 6,
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
          'name': 7,
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
          'name': 8,
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
          'name': 9,
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
          'name': 10,
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
          'name': 11,
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
          'name': 12,
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
        }, {
          'name': 13,
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
        }, {
          'name': 14,
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
        }, {
          'name': 15,
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
          'name': 16,
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
          'name': 17,
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
          'name': 18,
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
          'name': 19,
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
          'name': 20,
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
          'name': 21,
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
        }, {
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
        }, {
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
        }, {
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
        },
        {
          'name': 30,
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
          'name': 31,
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
      this.chartDataAmount = data.usageAmount;
      this.chartDataKwh = data.usageKwh;
      this.getScreenSize();
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
    return val.toLocaleString() + 'k';
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
}
