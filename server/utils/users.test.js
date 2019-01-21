const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    let users;

    beforeEach(( ) => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Steve',
            room: 'Node Room'
        }, {
            id: '2',
            name: 'Mike',
            room: 'Another Room'
        },
        {
            id: '3',
            name: 'Chris',
            room: 'Node Room'
        }]
    });

    it('should add new user', () => {
        let users = new Users();
        let user = {
            id: '123',
            name: 'Steve',
            room: 'Room A'
        };
        let resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);

    });

    it('should remove a user', () => {
        let userId = '1';
        let user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should NOT remove user', () => {
        let userId = 'something';
        let user = users.removeUser(userId);

        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        let userId = '2';
        let user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });

    it('should NOT find user', () => {
        let userId = 'something';
        let user = users.getUser(userId);

        expect(user).toNotExist;;
    });

    it('should return names for Node Room', () => {
        let userList = users.getUserList('Node Room');

        expect(userList).toEqual(['Steve', 'Chris']);
    });

    it('should return names for Another Room', () => {
        let userList = users.getUserList('Another Room');

        expect(userList).toEqual(['Mike']);
    });
});