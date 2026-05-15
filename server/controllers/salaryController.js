import salaryService from "#services/salaryService";

const createSalary = async (req, res) => {
  try {
    const salary = await salaryService.createSalary(req.body);

    res.status(201).json(salary);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSalaries = async (req, res) => {
  try {
    const salaries = await salaryService.getSalaries();

    res.status(200).json(salaries);
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getSalaryById = async (req, res) => {
  try {
    const salary = await salaryService.getSalaryById(
      req.params.id
    );

    res.status(200).json(salary);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const updateSalary = async (req, res) => {
  try {
    const updatedSalary = await salaryService.updateSalary(
      req.params.id,
      req.body
    );

    res.status(200).json(updatedSalary);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export default {
  createSalary,
  getSalaries,
  getSalaryById,
  updateSalary,
};