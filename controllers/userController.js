import { body, validationResult } from "express-validator";

const login = async (req, res) => {
    console.log(123);
  const error = validationResult(req);
  //  email password
  if (!error.isEmpty()) {
    return res.status(404).json({ errors: error.array() });
  }
  const { email, password } = req.body;
  // validation
  res.send("POST login users");
};

const resgister = async (req, res) => {
  res.send("POST register users");
};

export default {
  login,
  resgister,
};
