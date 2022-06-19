
const FakeDatabase = require('../firebase/fakeDatabase');
const CreateLoginOrRegisterService = require('./CreateLoginOrRegisterService');

let fakeDatabase;
let createLoginOrRegisterService;

describe('CreateLoginOrRegisterService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    createLoginOrRegisterService = new CreateLoginOrRegisterService(fakeDatabase);
  });

  it('should be able to login or register', async () => {
    const user = await createLoginOrRegisterService.execute(1, "email@alu.ufc.br", "username", "photo");

    // expect(user).toBeDefined();
  });
});