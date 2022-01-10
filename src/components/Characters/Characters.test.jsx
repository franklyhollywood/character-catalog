import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Characters from './Characters.jsx';

it('renders the characters view', () => {
  const characters = [
    {
      image: 'someurl',
      name: 'fred',
      species: 'ape',
      status: 'dead',
    },
  ];

  const { container } = render(
    <MemoryRouter>
      <Characters characters={characters} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
