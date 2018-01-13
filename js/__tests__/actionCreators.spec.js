// @flow

import { setSearchTerm, addAPIData } from '../actionCreators';

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(
    addAPIData({
      title: 'Billions',
      year: '2016–',
      description:
        'U.S. Attorney Chuck Rhoades goes after hedge fund king, Bobby "Axe" Axelrod in a battle between two powerful New York figures.',
      poster: 'b.jpg',
      imdbID: 'tt4270492',
      trailer: '_raEUMLL-ZI',
      rating: '8.6'
    })
  ).toMatchSnapshot();
});
