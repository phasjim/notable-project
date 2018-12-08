import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PhysiciansListComponent } from './physicians-list/physicians-list.component';
import { ScheduleComponent } from './schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    PhysiciansListComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,

    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
