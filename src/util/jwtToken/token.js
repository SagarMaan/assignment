import jwt from "jsonwebtoken";

export const jwtToken = (userId, userKey, emailId) => {
  try {
    const token = jwt.sign(
      { userId: userId.toString(), userKey: userKey, emailId: emailId },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    return token;
  } catch (error) {
    return res.status(500).send({ status: false, message: error.message });
  }
};
