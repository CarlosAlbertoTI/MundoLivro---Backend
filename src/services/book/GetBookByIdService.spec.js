
const FakeDatabase = require('../firebase/fakeDatabase');
const GetBookByIdOfUserService = require('./GetBookByIdOfUserService');

let fakeDatabase;
let getBookByIdOfUserService;

describe('GetBookByIdOfUserService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    getBookByIdOfUserService = new GetBookByIdOfUserService(fakeDatabase);
  });

  // it('não deve ser capaz de pegar um livro por id de um usuário inexistente', async () => {
  //   await expect(
  //     getBookByIdOfUserService.execute(-1, 0)
  //   ).toThrow();
  // });

  it('deve ser capaz de pegar um livro por id de um usuário', async () => {
    const book = await getBookByIdOfUserService.execute(1, 0);

    // expect(book).toBeDefined();
  });
});