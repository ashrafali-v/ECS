import { Component,OnInit } from '@angular/core';
import { CommonAppService } from './services/common-app.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(){
  }
}
