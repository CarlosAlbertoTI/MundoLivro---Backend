
const FakeDatabase = require('../firebase/fakeDatabase');
const GetBooksFromUserService = require('./GetBooksFromUserService');

let fakeDatabase;
let getBooksFromUserService;

describe('GetBooksFromUserService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    getBooksFromUserService = new GetBooksFromUserService(fakeDatabase);
  });

  // it('não deve ser capaz de pegar livros de um usuário inexistente', async () => {
  //   await expect(
  //     getBooksFromUserService.execute(-1)
  //   ).toThrow();
  // });

  it('deve ser capaz de pegar todos os livros de um usuário', async () => {
    const books = await getBooksFromUserService.execute(0);

    expect(books).toEqual([]);
  });
});