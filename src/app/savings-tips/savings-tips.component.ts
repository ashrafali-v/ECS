import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings-tips',
  templateUrl: './savings-tips.component.html',
  styleUrls: ['./savings-tips.component.scss']
})
export class SavingsTipsComponent implements OnInit {
  loader:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
