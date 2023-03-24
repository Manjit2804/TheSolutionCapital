const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema(
  {
    currentOwner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 6,
    },
    type: {
      type: String,
      enum: ["day-office", "shared-office", "temporary-office"],
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 50,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sqmeters: {
      type: Number,
      required: true,
      min: 15,
    },
    continent: {
      type: String,
      required: true,
    },
    employees: {
      type: Number,
      required: true,
      min: 10,
    },
    featured: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", PropertySchema);
