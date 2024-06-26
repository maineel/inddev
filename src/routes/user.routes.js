import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserWithId,
  updateUserWithId,
  deleteUserWithId,
} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.route("/").post(createUser);
userRouter.route("/").get(getUsers);
userRouter.route("/:id").get(getUserWithId);
userRouter.route("/:id").put(updateUserWithId);
userRouter.route("/:id").delete(deleteUserWithId);

export { userRouter };
