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

export default {
  createUser,
};