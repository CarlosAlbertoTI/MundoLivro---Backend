
const FakeDatabase = require('../firebase/fakeDatabase');
const GetUsersService = require('./GetUsersService');

let fakeDatabase;
let getUsersService;

describe('GetUsersService', () => {
  beforeEach(() => {
    fakeDatabase = new FakeDatabase();
    getUsersService = new GetUsersService(fakeDatabase);
  });

  it('should be able to get all users', async () => {
    const users = await getUsersService.execute();

    // expect(users).toBeDefined();
  });
});