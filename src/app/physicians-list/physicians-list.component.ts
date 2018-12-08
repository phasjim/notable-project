import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-physicians-list',
  templateUrl: './physicians-list.component.html',
  styleUrls: ['./physicians-list.component.scss']
})
export class PhysiciansListComponent implements OnInit {
  @Input() physicians: any[];
  @Output() outputPhysician = new EventEmitter();
  selectedPhysician: any;

  constructor() { }

  ngOnInit() {
  }

  ifSelectedPhysician(physician) {
    return physician === this.selectedPhysician;
  }

  onClickPhysician(physician) {
    this.selectedPhysician = physician;
    this.outputPhysician.emit(physician);
  }

  onLogout() {
    console.log("Logout");
  }
}
