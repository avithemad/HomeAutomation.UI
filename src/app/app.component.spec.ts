import { AppComponent } from './app.component';
import { render, screen, within, fireEvent } from '@testing-library/angular';
import { AppRoutingModule } from './app-routing.module';
import { DevicesComponent } from './devices/devices.component';

describe('AppComponent', () => {
  beforeEach(async () => {});

  it('should create the app with header "Home Automation"', async () => {
    await render(AppComponent);

    expect(
      await screen.findByRole('heading', { name: /home automation/i })
    ).toBeInTheDocument();
  });

  it('should contain navigation links', async () => {
    const navigationRegion = await getNavigationRegion();

    expect(navigationRegion).toBeInTheDocument();
  });

  it('should contain devices navigation link', async () => {
    const navigationRegion = await getNavigationRegion();

    expect(
      await within(navigationRegion).getByRole('link', { name: /devices/i })
    ).toBeInTheDocument();
  });

  it('should contain schedules navigation link', async () => {
    const navigationRegion = await getNavigationRegion();

    expect(navigationRegion).toBeInTheDocument();

    expect(
      await within(navigationRegion).getByRole('link', { name: /schedules/i })
    ).toBeInTheDocument();
  });

  it('should contain layout navigation link', async () => {
    const navigationRegion = await getNavigationRegion();

    expect(navigationRegion).toBeInTheDocument();

    expect(
      await within(navigationRegion).getByRole('link', { name: /layout/i })
    ).toBeInTheDocument();
  });

  it('should navigate to Devices section on clicking devices navigation link', async () => {
    const { fixture } = await renderComponent();

    await fireEvent.click(screen.getByRole('link', { name: /devices/i }));
    await fixture.whenStable();
    expect(
      await screen.getByRole('application', { name: /devices-section/i })
    ).toBeInTheDocument();
  });

  it('should navigate to Schedules section on clicking schedules navigation link', async () => {
    const { fixture } = await renderComponent();

    await fireEvent.click(screen.getByRole('link', { name: /schedules/i }));
    await fixture.whenStable();
    expect(
      await screen.getByRole('application', { name: /schedules-section/i })
    ).toBeInTheDocument();
  });

  it('should navigate to Layout section on clicking layout navigation link', async () => {
    const { fixture } = await renderComponent();

    await fireEvent.click(screen.getByRole('link', { name: /layout/i }));
    await fixture.whenStable();
    expect(
      await screen.getByRole('application', { name: /layout-section/i })
    ).toBeInTheDocument();
  });
});

async function renderComponent() {
  return await render(AppComponent, {
    imports: [AppRoutingModule],
  });
}

async function getNavigationRegion() {
  await renderComponent();

  const navigationRegion = await screen.findByRole('navigation', {
    name: /main-nav/i,
  });
  return navigationRegion;
}
