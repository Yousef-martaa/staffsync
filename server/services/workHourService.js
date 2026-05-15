import WorkHour from "#models/WorkHour";

const createWorkHour = async (workHourData) => {
  const workHour = await WorkHour.create(workHourData);

  return workHour;
};

const getWorkHours = async () => {
  const workHours = await WorkHour.find();

  return workHours;
};

const getWorkHourById = async (id) => {
  const workHour = await WorkHour.findById(id);

  if (!workHour) {
    throw new Error("Work hour record not found");
  }

  return workHour;
};

const updateWorkHour = async (id, updateData) => {
  const updatedWorkHour = await WorkHour.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedWorkHour) {
    throw new Error("Work hour record not found");
  }

  return updatedWorkHour;
};

const getTotalMonthlyHours = async (employeeName, month) => {
  const records = await WorkHour.find({
    employeeName,
    month,
  });

  const totalHours = records.reduce(
    (sum, record) => sum + record.hoursWorked,
    0
  );

  return totalHours;
};

export default {
  createWorkHour,
  getWorkHours,
  getWorkHourById,
  updateWorkHour,
  getTotalMonthlyHours,
};