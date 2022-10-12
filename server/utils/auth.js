const jwt = require("jsonwebtoken");

const secret = "secrettbd";
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    let token = req.body.token || req.headers.authorization || req.query.token;

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
      return res.status(400).json({ message: "invalid token!" });
    }
    return req;
  },
  signToken: function ({ username, _id }) {
    const payload = { username, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};
