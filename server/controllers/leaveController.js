import leaveService from "#services/leaveService";

const createLeave = async (req, res) => {
  try {
    const leave = await leaveService.createLeave(req.body);

    res.status(201).json(leave);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getLeaves = async (req, res) => {
  try {
    const leaves = await leaveService.getLeaves();

    res.status(200).json(leaves);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getLeaveById = async (req, res) => {
  try {
    const leave = await leaveService.getLeaveById(req.params.id);

    res.status(200).json(leave);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const updateLeave = async (req, res) => {
  try {
    const updatedLeave = await leaveService.updateLeave(
      req.params.id,
      req.body
    );

    res.status(200).json(updatedLeave);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const deleteLeave = async (req, res) => {
  try {
    await leaveService.deleteLeave(req.params.id);

    res.status(200).json({
      message: "Leave request deleted successfully",
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default {
  createLeave,
  getLeaves,
  getLeaveById,
  updateLeave,
  deleteLeave,
};