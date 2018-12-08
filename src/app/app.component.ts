import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  physicians: any[] = [
    { firstname: 'Julius', lastname: 'Hibbert', email: 'jhibbert@notable.com', patients: [{ name: 'Sterling Archer', time: '8:00AM', kind: 'New Patient' }, { name: 'Cyril Figis', time: '8:30AM', kind: 'Follow-up' }, { name: 'Ray Gilette', time: '9:00AM', kind: 'Follow-up' }] },
    { firstname: 'Prita', lastname: 'Hasjim', email: 'phasjim@notable.com', patients: [{ name: 'Nancy Drew', time: '8:00AM', kind: 'New Patient' }, { name: 'Hey Arnold', time: '8:30AM', kind: 'New Patient' }, { name: 'Tom Cruise', time: '9:00AM', kind: 'Follow-up' }] },
    { firstname: 'Thomas', lastname: 'Rodriguez', email: 'trodrogiuez.com', patients: [{ name: 'Steven Universe', time: '8:00AM', kind: 'New Patient' }, { name: 'Nick Hernandez', time: '8:30AM', kind: 'Follow-up' }, { name: 'Ren Stimpy', time: '9:00AM', kind: 'Follow-up' }] }
  ];

  selectedPhysician: any;

  onChangeSelectedPhysician(event) {
    this.selectedPhysician = event;
  }

}
