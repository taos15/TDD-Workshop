// A movie store is asking you to make an application
// the application can add movies to an inventory array,
// track if a movie is rented out or in stock,
// and calculate a customer's total cost for the # of rentals * # of days.
// A customer can only rent a movie if it is in stock.

//I recommend creating classes for both customers and movies

//Example movie class:
export let inventory: Array<Movie> = [];

export class Movie {
  title: string;
  inStock: boolean;
  daysRented: number;

  constructor(title: string) {
    this.title = title;
    this.inStock = true;
    this.daysRented = 0;
  }

  rentMovie() {
    this.inStock = false;
  }
  //you need more functions than just this
}

export function addMovie(movie: Movie) {
  inventory.push(movie);
}
