import { body, validationResult } from "express-validator";
import { userRepo } from "../repositories/index.js";
import Exception from "../exceptions/Exception.js";
const login = async (req, res) => {
  const error = validationResult(req);
  //  email password
  if (!error.isEmpty()) {
    return res.status(404).json({ errors: error.array() });
  }
  const { email, password } = req.body;
  try {
    let data = await userRepo.login({ email, password });
    res.status(200).json({
      message: "Login success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Login failed",
    });
  }
};

const resgister = async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;
  try {
    const user = await userRepo.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    });
    res.status(201).json({
      message: "Register Successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      message: "Register failed",
    });
  }
};

export default {
  login,
  resgister,
};
