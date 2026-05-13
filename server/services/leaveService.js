import Leave from "#models/Leave";

const createLeave = async (leaveData) => {
  const leave = await Leave.create(leaveData);

  return leave;
};

const getLeaves = async () => {
  const leaves = await Leave.find();

  return leaves;
};

const getLeaveById = async (id) => {
  const leave = await Leave.findById(id);

  if (!leave) {
    throw new Error("Leave request not found");
  }

  return leave;
};

const updateLeave = async (id, updateData) => {
  const updatedLeave = await Leave.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedLeave) {
    throw new Error("Leave request not found");
  }

  return updatedLeave;
};

const deleteLeave = async (id) => {
  const deletedLeave = await Leave.findByIdAndDelete(id);

  if (!deletedLeave) {
    throw new Error("Leave request not found");
  }

  return deletedLeave;
};

export default {
  createLeave,
  getLeaves,
  getLeaveById,
  updateLeave,
  deleteLeave,
};