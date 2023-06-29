import jwt from "jsonwebtoken";

export default function checkToken(req, res, next) {
  console.log(jwt);
  // by pass login user
  console.log(req.url);
  if (req.url == "/user/login" || req.url == "/user/register") {
    next();
    return;
  }
  const tokenArray = req.headers?.authorization?.split("Bearer ");
  const token = tokenArray[1];
  try {
    const jwtObject = jwt.verify(token, process.env.JWT_SECRET);
    const isExpired = Date.now() >= jwtObject.exp * 1000;
    console.log(isExpired);
    if (!isExpired) {
      next();
      return;
    } else {
      res.status(404).json({
        message: "Token is expired",
      });
    }
  } catch (error) {
    console.log(error,'error');
    res.status(404).json({
      message: "Failed",
    });
  }
}
