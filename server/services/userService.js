import User from "#models/User";

const createUser = async (userData) => {
  const user = await User.create(userData);

  return user;
};

export default {
  createUser,
};