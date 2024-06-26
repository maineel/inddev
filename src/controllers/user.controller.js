import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";

const createUser = asyncHandler(async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    companyName,
    age,
    city,
    state,
    zip,
    email,
    web,
  } = req.body;

  if (
    !id ||
    !firstName ||
    !lastName ||
    !age ||
    !city ||
    !state ||
    !zip ||
    !email
  ) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  const userExists = await User.findOne({ $or: [id, email] });
  if (userExists) {
    return res
      .status(400)
      .json({ message: "User with this id or email already exists" });
  }

  const user = await User.create({
    id,
    firstName,
    lastName,
    companyName,
    age,
    city,
    state,
    zip,
    email,
    web,
  });

  return res.status(201).json({ message: "User created successfully" });
});

const getUsers = asyncHandler(async (req, res) => {
    const { page = 1, limit = 5, search, sort } = req.query;
    const skip = (page - 1) * limit;
    let sortObject = {};
  
    if (sort) {
      const sortOrder = sort.startsWith('-') ? -1 : 1;
      const sortField = sort.startsWith('-') ? sort.substring(1) : sort;
      sortObject[sortField] = sortOrder;
    }
  
    let searchCondition = {};
    if (search) {
      searchCondition = {
        $or: [
          { firstName: { $regex: search, $options: 'i' } },
          { lastName: { $regex: search, $options: 'i' } },
        ],
      };
    }
  
    const users = await User.find(searchCondition)
      .sort(sortObject)
      .skip(skip)
      .limit(parseInt(limit));
  
    res.status(200).json(users);
  });

const getUserWithId = asyncHandler(async(req,res) => {
    const {id} = req.params;

    const user = await User.findOne({id});

    if(!user){
        return res.status(404).json({message: `User with id:${id} not found`});
    }

    return res.status(200).json({user});
});

const updateUserWithId = asyncHandler(async(req,res) => {
    const {id} = req.params;
    const {firstName, lastName, companyName, age, city, state, zip, email, web} = req.body;

    const user = await User.findOne({id});
    
    if(!user){
        return res.status(404).json({message: `User with id:${id} not found`});
    }

    if (firstName !== undefined) user.firstName = firstName;
    if (lastName !== undefined) user.lastName = lastName;
    if (companyName !== undefined) user.companyName = companyName;
    if (age !== undefined) user.age = age;
    if (city !== undefined) user.city = city;
    if (state !== undefined) user.state = state;
    if (zip !== undefined) user.zip = zip;
    if (email !== undefined) user.email = email;
    if (web !== undefined) user.web = web;

    await user.save();

    return res.status(200).json({});
});

const deleteUserWithId = asyncHandler(async(req,res) => {
    const {id} = req.params;

    const user = await User.findOne({id});

    if(!user){
        return res.status(404).json({message: `User with id:${id} not found`});
    }

    await user.remove();

    return res.status(204).json({});
});

export {createUser, getUsers, getUserWithId, updateUserWithId, deleteUserWithId}