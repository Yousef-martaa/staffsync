import User from "#models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    {
      userId: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  return {
    token,
    user: {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
};
export default {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  replaceUser,
  deleteUser,
  loginUser,
};