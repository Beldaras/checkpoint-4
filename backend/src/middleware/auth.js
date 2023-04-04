const { decodeJWT } = require("../services/jwtService");

const authorization = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;

    if (!token) throw new Error("Authorization header is missing");

    req.payload = decodeJWT(token);

    return next();
  } catch (err) {
    res.sendStatus(401);
  }
};

module.exports = authorization;
