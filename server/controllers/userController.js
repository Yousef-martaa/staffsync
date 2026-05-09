import userService from "#services/userService";

const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);

    res.status(201).json(user);
  } catch (error) {
    if (error.message === "Email already exists") {
      return res.status(400).json({
        message: error.message,
      });
    }

    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(
      req.params.id,
      req.body
    );

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const replaceUser = async (req, res) => {
  try {
    const replacedUser = await userService.replaceUser(
      req.params.id,
      req.body
    );

    if (!replacedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(replacedUser);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userService.loginUser(
      req.body.email,
      req.body.password
    );

    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
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