import mongoose from "mongoose";

const salarySchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
      trim: true,
    },

    baseSalary: {
      type: Number,
      required: true,
    },

    bonus: {
      type: Number,
      default: 0,
    },

    deductions: {
      type: Number,
      default: 0,
    },

    totalSalary: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Salary = mongoose.model("Salary", salarySchema);

export default Salary;