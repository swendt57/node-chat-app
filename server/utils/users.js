//ES6 class syntax

class Users {
    constructor() {
        this.users = [];
    };

    addUser(id, name, room) {
        let user = {id, name, room};
        this.users.push(user);
        return user;
    };

    removeUser() {

    }
}

module.exports = {Users};