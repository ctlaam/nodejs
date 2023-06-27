import mongoose from "mongoose";
import { print, OutputType } from "../helper/print.js";
import Exception from "../exceptions/Exception.js";
async function connect() {
  try {
    let connection = await mongoose.connect(process.env.MONGO_URI);
    print("connect success", OutputType.SUCCESS);
  } catch (error) {
    const { code } = error;
    if (code == 8000) {
      throw new Exception("Sai tên ng dùng hoặc mật khẩu");
    } else if (code == "ENOTFOUND") {
      throw new Exception("Wrong server name/connection string");
    }
    throw new Exception("Cant connect");
  }
}

export default connect;
