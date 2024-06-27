import mongoose, { Schema } from "mongoose";
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The user's unique identifier.
 *         firstName:
 *           type: string
 *           description: The user's first name.
 *         lastName:
 *           type: string
 *           description: The user's last name.
 *         companyName:
 *           type: string
 *           description: The user's company name.
 *         age:
 *           type: number
 *           description: The user's age.
 *         city:
 *           type: string
 *           description: The user's city.
 *         state:
 *           type: string
 *           description: The user's state.
 *         zip:
 *           type: number
 *           description: The user's zip code.
 *         email:
 *           type: string
 *           description: The user's email address.
 *         web:
 *           type: string
 *           description: The user's website.
 *       required:
 *         - id
 *         - firstName
 *         - lastName
 *         - age
 *         - city
 *         - state
 *         - zip
 *         - email
 */
const userSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    age: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    web: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
