import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-physicians-list',
  templateUrl: './physicians-list.component.html',
  styleUrls: ['./physicians-list.component.scss']
})
export class PhysiciansListComponent implements OnInit {
  @Input() physicians: any[];
  @Output() selectedPhysician = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  onClickPhysician(physician) {
    this.selectedPhysician.emit(physician);
  }

  onLogout() {
    console.log("Logout");
  }
}
