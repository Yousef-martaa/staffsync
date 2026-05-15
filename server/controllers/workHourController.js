import workHourService from "#services/workHourService";

const createWorkHour = async (req, res) => {
  try {
    const workHour = await workHourService.createWorkHour(req.body);

    res.status(201).json(workHour);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getWorkHours = async (req, res) => {
  try {
    const workHours = await workHourService.getWorkHours();

    res.status(200).json(workHours);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getWorkHourById = async (req, res) => {
  try {
    const workHour = await workHourService.getWorkHourById(
      req.params.id
    );

    res.status(200).json(workHour);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const updateWorkHour = async (req, res) => {
  try {
    const updatedWorkHour =
      await workHourService.updateWorkHour(
        req.params.id,
        req.body
      );

    res.status(200).json(updatedWorkHour);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const getTotalMonthlyHours = async (req, res) => {
  try {
    const { employeeName, month } = req.params;

    const totalHours =
      await workHourService.getTotalMonthlyHours(
        employeeName,
        month
      );

    res.status(200).json({
      employeeName,
      month,
      totalHours,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default {
  createWorkHour,
  getWorkHours,
  getWorkHourById,
  updateWorkHour,
  getTotalMonthlyHours,
};