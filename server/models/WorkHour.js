import mongoose from "mongoose";

const workHourSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: true,
      trim: true,
    },

    date: {
      type: Date,
      required: true,
    },

    hoursWorked: {
      type: Number,
      required: true,
    },

    month: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const WorkHour = mongoose.model("WorkHour", workHourSchema);

export default WorkHour;