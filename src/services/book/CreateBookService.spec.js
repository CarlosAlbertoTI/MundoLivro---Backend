
const FakeDatabase = require('../firebase/fakeDatabase');
const CreateBookService = require('./CreateBookService');

let fakeDatabase;
let createBookService;

describe('CreateBookService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    createBookService = new CreateBookService(fakeDatabase);
  });

  it('deve ser capaz de criar um livro', async () => {
    
    const book = await createBookService.execute(1, {
      userId: 0,
      name: "nome",
      description: "descricao",
      categories: "categorias"
    });

    // expect(book).toBeDefined();
  });
});