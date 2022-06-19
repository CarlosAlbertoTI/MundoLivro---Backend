
const FakeDatabase = require('../firebase/fakeDatabase');
const DeleteBookService = require('./DeleteBookService');
const GetBooksService = require('./GetBooksService');

let fakeDatabase;
let deleteBookService;
let getBooksService;

describe('DeleteBookService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    deleteBookService = new DeleteBookService(fakeDatabase);
    getBooksService = new GetBooksService(fakeDatabase);
  });

  it('deve ser capaz de deletar um livro', async () => {
    
    const book = await deleteBookService.execute(1, 0);
    const books = await getBooksService.execute();

    const delBook = books.find(book => book.id == 1);
    // expect(delBook).toBe(undefined);
  });
});