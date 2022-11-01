import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const signup = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(404);
    throw new Error("Enter all fields");
  }
  const emailExist = await User.findOne({ email });
  const nameExist = await User.findOne({ name });

  if (nameExist && emailExist) {
    res.status(400);
    throw new Error("User already Exist!");
  }

  if (emailExist) {
    res.status(400);
    throw new Error("Email already Exist!");
  }

  if (nameExist) {
    res.status(400);
    throw new Error("Name already Exist!");
  }

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);
  const user = await User.create({ ...req.body, password: hash });
  res.json(user);
});

export const signin = asyncHandler(async (req, res) => {
  const user = await User.findOne({ name: req.body.name });

  if (!user) {
    res.status(404);
    throw new Error("User not found!");
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  const { password, ...others } = user._doc;
  res
    .cookie("access_token", token, {
      httpOnly: true,
    })
    .status(200)
    .json(others);
});
