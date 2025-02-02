import User from "../models/userModel.js";
import { hashPassword, comparePasswords } from "../utils/passwordUtils.js";
import jwt from "jsonwebtoken";

export const registerUser = async (userData) => {
    const { username, email, password, firstName, lastName } = userData;

    if (await User.findOne({ $or: [{ username }, { email }] })) {
        throw new Error("Username or email already exists");
    }

    const hashedPassword = await hashPassword(password);
    const user = new User({
        username,
        email,
        password: hashedPassword,
        firstName,
        lastName,
    });

    await user.save();

    return { id: user._id, username, email, firstName, lastName };
};

export const loginUser = async ({email, username, password}) => {
    const user = await User.findOne({ $or: [{ username }, { email }] });
  if (!user || !(await comparePasswords(password, user.password))) {
    throw new Error("Invalid username or password"); 
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return {
    token,
    user: { id: user._id, username: user.username, email: user.email },
  };
}