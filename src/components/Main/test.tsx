import { render, screen } from '@testing-library/react';
import Main from './';

describe('test <Main /> component', () => {
  const { container } = render(<Main />);

  it('should render heading', () => {
    expect(
      screen.getByRole('heading', { name: /React Avançado/i })
    ).toBeInTheDocument();
  });

  expect(container.firstChild).toMatchSnapshot();
});
