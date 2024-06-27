import { Router } from "express";
import {
  createUser,
  getUsers,
  getUserWithId,
  updateUserWithId,
  deleteUserWithId,
} from "../controllers/user.controller.js";

const userRouter = Router();

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - firstName
 *               - lastName
 *               - age
 *               - city
 *               - state
 *               - zip
 *               - email
 *             properties:
 *               id:
 *                 type: number
 *                 description: The user ID.
 *               firstName:
 *                 type: string
 *                 description: The user's first name.
 *               lastName:
 *                 type: string
 *                 description: The user's last name.
 *               age:
 *                 type: number
 *                 description: The user's age.
 *               city:
 *                 type: string
 *                 description: The user's city.
 *               state:
 *                 type: string
 *                 description: The user's state.
 *               zip:
 *                 type: number
 *                 description: The user's zip code.
 *               email:
 *                 type: string
 *                 description: The user's email.
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
userRouter.route("/").post(createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Retrieves a list of users
 *     description: Provides a paginated list of users, optionally filtered by a search term and sorted by a specified field.
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number of the users list to retrieve.
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 5
 *         description: The number of users to retrieve per page.
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: A search term to filter users by their first or last name.
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: The field to sort the users by. Prefix with '-' for descending order.
 *     responses:
 *       200:
 *         description: A list of users. Can be empty if no users match the criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
userRouter.route("/").get(getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Retrieves user with ID
 *     description: Retrieves user with the specified ID.
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id  
 *        schema:
 *         type: number
 *     responses:
 *       200:
 *         description: A user. Can be empty if no user matches the criteria.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       400:
 *         description: Bad request if the query parameters are not in the correct format.
 */
userRouter.route("/:id").get(getUserWithId);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Updates a user with the specified ID
 *     description: This endpoint updates an existing user's details with the specified ID. If the user is not found, it returns a 404 error. Only fields provided in the request body will be updated.
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: number
 *        description: The user's ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The user's first name
 *               lastName:
 *                 type: string
 *                 description: The user's last name
 *               companyName:
 *                 type: string
 *                 description: The user's company name
 *               age:
 *                 type: number
 *                 description: The user's age
 *               city:
 *                 type: string
 *                 description: The user's city
 *               state:
 *                 type: string
 *                 description: The user's state
 *               zip:
 *                 type: number
 *                 description: The user's zip code
 *               email:
 *                 type: string
 *                 description: The user's email address
 *               web:
 *                 type: string
 *                 description: The user's website
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User with id:{id} not found
 *       400:
 *         description: Bad request if the body parameters are not in the correct format
 */
userRouter.route("/:id").put(updateUserWithId);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Deletes a user with the specified ID
 *     description: This endpoint deletes an existing user's details with the specified ID. If the user is not found, it returns a 404 error.
 *     tags: [Users]
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: number
 *        description: The user's ID to be deleted
 *     responses:
 *       204:
 *         description: User with id:{id} deleted successfully
 *       404:
 *         description: User with id:{id} not found
 *       400:
 *         description: Bad request if the parameters are not in the correct format
 */
userRouter.route("/:id").delete(deleteUserWithId);

export { userRouter };
