import { JWT_SECRET, JWT_EXPIRATION_TIME } from "../config/config.js";
import jwt from "jsonwebtoken";

export const EncodeToken = async (email, user_id) => {
  const KEY = JWT_SECRET;
  const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
  const PAYLOAD = { email: email, user_id: user_id };
  return jwt.sign(PAYLOAD, KEY, EXPIRE);
};

export const DecodeToken = async (token) => {
  try {
    const KEY = JWT_SECRET;
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return json({ message: error.message });
  }
};
