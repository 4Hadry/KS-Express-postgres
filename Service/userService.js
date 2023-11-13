const { models } = require("../models");

module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },
  creatUser: async (data) => {
    const users = await models.user.create(data);
    return users;
  },
  updtUser: (userId, updateUserData) => {
    const userIndex = user.findIndex((users) => users.id == userId);
    if (userIndex !== -1) {
      user[userIndex] = { ...user[userIndex], ...updateUserData };
      return user;
    }
  },
  deleteUser: (userId) => {
    const userIndex = user.findIndex((users) => users.id == userId);
    if (userIndex !== -1) {
      const DelUser = user.splice(userIndex, 1);
      return DelUser;
    }
  },
 
};
