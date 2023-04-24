//dont forget to import your functions

import { Movie, addMovie, inventory } from '../Movie Store/MovieStore';

describe('Movie Store', () => {
  test('calling object something', () => {
    let movie = new Movie('Top Gun2');
    
    expect(movie.title).toEqual('Top Gun2');
  });
  test('addMovie to the inventory array', () => {
    let movie = new Movie("Shrek")
    addMovie(movie)
    console.log(movie)
    expect(inventory[0].title).toEqual('Shrek')
  })
});
