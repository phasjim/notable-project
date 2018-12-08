import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  @Input() displayedPhysician: any;

  constructor() { }

  ngOnInit() {
  }

}
