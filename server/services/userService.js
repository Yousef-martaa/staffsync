const User = require("../models/User");

const createUser = async (userData) => {
  const user = await User.create(userData);

  return user;
};

module.exports = {
  createUser,
};