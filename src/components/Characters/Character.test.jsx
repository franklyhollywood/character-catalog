import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import Character from './Character.jsx';

it('renders the character view', () => {
  const character = {
    image: 'someurl',
    name: 'fred',
    species: 'ape',
    status: 'dead',
  };

  const { container } = render(
    <MemoryRouter>
      <Character character={character} />
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});
