import { render, screen } from '@testing-library/angular';
import { DevicesComponent } from './devices.component';

describe('DevicesComponent', () => {
  beforeEach(async () => {
    await render(DevicesComponent);
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
});
