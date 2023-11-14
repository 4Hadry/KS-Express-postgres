const { models } = require("../models");
const bcrypt = require("bcryptjs");
module.exports = {
  getUser: async () => {
    const users = await models.user.findAll();
    return users;
  },

  creatUser: async (data) => {
    data.password = bcrypt.hashSync(data.password, 10);
    const users = await models.user.create(data);
    return users;
  },
  updtUser: async (userId, updateUserData) => {
    const users = await models.teacher.update(updateUserData, {
      where: {
        id: userId,
      },
    });
    return users;
  },
  deleteUser: async (userId) => {
    const users = await models.teacher.findByPk(userId);
    if (users) {
      users.destroy();
      return "Teacher Delete Succfully";
    }
    return null;
  },
};
