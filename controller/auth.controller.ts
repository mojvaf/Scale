import { Request, Response } from "express";
import { registerSchema, loginSchema } from "../validation/auth.validation";
import userModel from "../model/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) return res.status(400).send({ message: error.message });

  const user = await userModel.findOne({ email });
  if (!user)
    return res.status(400).send({ message: "wrong email or password" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).send({ message: "wrong email or password" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET!,
    { expiresIn: "1d" }
  );
  res.send({ token });
};

export const register = async (req: Request, res: Response) => {
  const { fullName, email, password } = req.body;

  const { error } = registerSchema.validate(req.body);
  if (error) return res.status(400).send({ message: error.message });

  let user = await userModel.findOne({ email });
  if (user) return res.status(400).send({ message: "email already exists" });

  // const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, 10);

  user = await userModel.create({
    fullName,
    email,
    password: hashPassword,
  });
  res.sendStatus(200);
};
