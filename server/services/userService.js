import User from "#models/User";
import bcrypt from "bcrypt";

const createUser = async (userData) => {
  const existingUser = await User.findOne({
    email: userData.email,
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const user = await User.create({
    ...userData,
    password: hashedPassword,
  });
  return user;
};


const getUsers = async () => {
  const users = await User.find();

  return users;
};

const getUserById = async (userId) => {
  const user = await User.findById(userId);
  return user;
};

const updateUser = async (userId, userData) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    userData,
    { new: true }
  );

  return updatedUser;
};

const replaceUser = async (userId, userData) => {
  const replacedUser = await User.findOneAndReplace(
    { _id: userId },
    userData,
    { new: true }
  );

  return replacedUser;
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);

  return deletedUser;
};

export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  replaceUser,
  deleteUser,
};