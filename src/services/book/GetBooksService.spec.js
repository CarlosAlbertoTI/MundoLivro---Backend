
const FakeDatabase = require('../firebase/fakeDatabase');
const GetBooksService = require('./GetBooksService');

let fakeDatabase;
let getBooksService;

describe('GetBooksService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    getBooksService = new GetBooksService(fakeDatabase);
  });

  it('should be able to get all books', async () => {
    const books = await getBooksService.execute();

    expect(books).toBeDefined();
  });
});