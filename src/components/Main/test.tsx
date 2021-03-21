import { render, screen } from '@testing-library/react';
import Main from './';

describe('test <Main /> component', () => {
  const { container } = render(<Main />);

  it('should render heading', () => {
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument();
  });

  it('should render colors correctly', () => {
    const { container } = render(<Main />);
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });

  expect(container.firstChild).toMatchSnapshot();
});
