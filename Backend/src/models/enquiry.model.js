import mongoose from "mongoose";

const enquirySchmea = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const enquiryModel =
  mongoose.models.order || mongoose.model("enquiry", enquirySchmea);

export default enquiryModel;
