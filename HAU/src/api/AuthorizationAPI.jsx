const AuthorizationAPI = {
  users: [
    { id: 1, login: "admin", password: "admin", fullName: "Администратор", role: "Администратор" },
    { id: 2, login: "dispatcher1", password: "12345", fullName: "Диспетчер - 147244", role: "Диспетчер" },
    { id: 3, login: "resident", password: "12345", fullName: "Смирнов С.С.", role: "Житель" },
  ],
  currentUser: null,
  all: function () {
    return this.users;
  },
  getCurrentUser: function () {
    return this.currentUser;
  },
  login: function (login, password) {
    const isSameCredentials = (user) => user.login === login && user.password === password;
    const user = this.users.find(isSameCredentials);
    if (!user) return null;
    this.currentUser = { ...user };
    return this.currentUser;
  },
  logout: function () {
    this.currentUser = null;
    return true;
  },
};

export default AuthorizationAPI;

