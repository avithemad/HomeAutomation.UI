import { ComponentFixture } from '@angular/core/testing';
import { fireEvent, render, screen } from '@testing-library/angular';
import { AddDeviceComponent } from './add-device/add-device.component';
import { DevicesComponent } from './devices.component';

describe('DevicesComponent', () => {
  let fixture: ComponentFixture<DevicesComponent>;
  beforeEach(async () => {
    fixture = (
      await render(DevicesComponent, { declarations: [AddDeviceComponent] })
    ).fixture;
  });

  it('should have devices subheading', async () => {
    expect(
      screen.getByRole('heading', { name: /devices/i })
    ).toBeInTheDocument();
  });

  it('should display a list of devices in a table', async () => {
    expect(
      screen.getByRole('table', { name: 'devices-table' })
    ).toBeInTheDocument();
  });

  it('should contain devices headers: "name"', async () => {
    expect(
      screen.getByRole('columnheader', { name: /name/i })
    ).toBeInTheDocument();
  });

  it('should contain devices headers "room"', async () => {
    expect(
      screen.getByRole('columnheader', { name: /room/i })
    ).toBeInTheDocument();
  });

  it('should contain devices headers "power rating"', async () => {
    expect(
      screen.getByRole('columnheader', { name: /power rating/i })
    ).toBeInTheDocument();
  });

  it('should contain devices headers "image"', async () => {
    expect(
      screen.getByRole('columnheader', { name: /image/i })
    ).toBeInTheDocument();
  });

  it('should contain devices headers "status"', async () => {
    expect(
      screen.getByRole('columnheader', { name: /status/i })
    ).toBeInTheDocument();
  });

  it('should display device name in existing list of devices in the table', async () => {
    mockDeviceList(fixture);

    expect(screen.getByText(/device 1/i)).toBeInTheDocument();
  });

  it('should display room in existing list of devices in the table', async () => {
    mockDeviceList(fixture);

    expect(screen.getByText(/living room/i)).toBeInTheDocument();
  });

  it('should display power rating in existing list of devices in the table', async () => {
    mockDeviceList(fixture);

    expect(screen.getByText(/1 kW/i)).toBeInTheDocument();
  });

  it('should display status of device in an existing list of devices in the table', async () => {
    mockDeviceList(fixture);

    expect(screen.getByText(/on/i)).toBeInTheDocument();
  });

  it('should display image of the device in an existing list of devices in the table', async () => {
    mockDeviceList(fixture);

    expect(
      screen.getByAltText(/image of device 1/i).getAttribute('src')
    ).toEqual('/someUrl');
    expect(screen.getByAltText(/image of device 1/i)).toBeInTheDocument();
  });

  it('should contain add button for adding devices', async () => {
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
  });

  it('should display an add device popup on click of add button', async () => {
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    fixture.detectChanges();

    expect(
      screen.getByRole('form', { name: /add-device/i })
    ).toBeInTheDocument();
  });

  it('should disable add button when add form is already present', async () => {
    fireEvent.click(screen.getByRole('button', { name: /add/i }));
    fixture.detectChanges();

    expect(
      screen.getByRole('button', { name: /add/i }).getAttribute('disabled')
    ).toEqual('');
  });
});
function mockDeviceList(fixture: ComponentFixture<DevicesComponent>) {
  fixture.componentInstance.deviceList = [
    {
      name: 'Device 1',
      room: 'Living room',
      powerRating: '1 kW',
      imageUrl: '/someUrl',
      imageLabel: 'image of Device 1',
      status: 'On',
    },
  ];

  fixture.detectChanges();
}
