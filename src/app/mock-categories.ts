import { Category } from './models/category.model';
import { Pin } from './models/pin.model';


export const CATEGORIES: Category[] = [
  new Category('book',1),
  new Category('film',2)
];

export const PINS:Pin[] = [
  new Pin('Oscar Wilde, Biography', 'book', new Date()),
  new Pin('LOTR', 'book', new Date()),
  new Pin('Terminator', 'film', new Date())
]
