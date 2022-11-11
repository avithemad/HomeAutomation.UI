import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { LayoutComponent } from './layout/layout.component';
import { SchedulesComponent } from './schedules/schedules.component';

const routes: Routes = [
  { path: 'devices', component: DevicesComponent },
  { path: 'schedules', component: SchedulesComponent },
  { path: 'layout', component: LayoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
