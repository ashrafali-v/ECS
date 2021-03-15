import { Component, OnInit,Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-report',
  templateUrl: './view-report.component.html',
  styleUrls: ['./view-report.component.scss']
})
export class ViewReportComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() modalDescription: string;
  @Input() deviceName: string;
  @Input() deviceCost: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
