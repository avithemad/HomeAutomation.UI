import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {
  public deviceList: Device[] = [];
  public formOn = false;

  constructor() {}

  ngOnInit(): void {}

  openAddDeviceForm() {
    this.formOn = true;
  }
}
