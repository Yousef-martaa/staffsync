import Salary from "#models/Salary";

const createSalary = async (salaryData) => {
  const totalSalary =
    salaryData.baseSalary +
    salaryData.bonus -
    salaryData.deductions;

  const salary = await Salary.create({
    ...salaryData,
    totalSalary,
  });

  return salary;
};

const getSalaries = async () => {
  const salaries = await Salary.find();

  return salaries;
};

const getSalaryById = async (id) => {
  const salary = await Salary.findById(id);

  if (!salary) {
    throw new Error("Salary record not found");
  }

  return salary;
};

const updateSalary = async (id, updateData) => {
  const totalSalary =
    updateData.baseSalary +
    updateData.bonus -
    updateData.deductions;

  const updatedSalary = await Salary.findByIdAndUpdate(
    id,
    {
      ...updateData,
      totalSalary,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedSalary) {
    throw new Error("Salary record not found");
  }

  return updatedSalary;
};

export default {
  createSalary,
  getSalaries,
  getSalaryById,
  updateSalary,
};