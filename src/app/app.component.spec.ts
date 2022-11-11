import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  beforeEach(async () => {});

  it('should create the app with header "Home Automation"', async () => {
    await render(AppComponent);

    expect(
      await screen.findByRole('heading', { name: /home automation/i })
    ).toBeInTheDocument();
  });
});
