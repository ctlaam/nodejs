import { EventEmitter } from "node:events";
import { print, OutputType } from "../helper/print.js";
import { User } from "../models/index.js";
import Exception from "../exceptions/Exception.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const myEvent = new EventEmitter();

myEvent.on("event.register.user", (params) => {});
const login = async ({ email, password }) => {
  const existingUser = await User.findOne({ email: email }).exec();
  if (existingUser) {
    // k giải mã ngược mật khẩu
    let isMatch = await bcrypt.compare(password, existingUser.password);
    if (isMatch) {
      let token = jwt.sign(
        {
          data: existingUser,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "10 days", // 10 ngày
        }
      );
      return {
        ...existingUser.toObject(),
        password: "not show",
        token,
      };
      console.log("tkhoan mật khẩu đúng");
    } else {
      throw new Exception("Wrong email or password");
    }
  } else {
    throw new Exception("Wrong email or password");
  }
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  try {
    const existingUser = await User.findOne({ email: email }).exec();
    console.log(existingUser);
    if (existingUser) {
      throw new Exception("User already exitst");
    }
    // const isMatched = await bcrypt.compare(password, existingUser.password);
    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
      // insert to db
    );
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      address,
    });
    return {
      ...newUser._doc,
      password: "not show",
    };
  } catch (error) {
    console.log(error);
    // check modeal validation here
    throw new Exception("cant not register user");
  }
};

export default {
  login,
  register,
};
