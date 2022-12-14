import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponent } from './devices/devices.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { LayoutComponent } from './layout/layout.component';
import { AddDeviceComponent } from './devices/add-device/add-device.component';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    SchedulesComponent,
    LayoutComponent,
    AddDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
