
const FakeDatabase = require('../firebase/fakeDatabase');
const GetUserByIdService = require('./GetUserByIdService');

let fakeDatabase;
let getUserByIdService;

describe('GetUserByIdService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    getUserByIdService = new GetUserByIdService(fakeDatabase);
  });

  it('should be able to get an user by id', async () => {
    const user = await getUserByIdService.execute();

    // expect(user).toBeDefined();
  });
});