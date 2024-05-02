import { Schema, model, Document } from "mongoose";

enum USER_ROLE {
  USER = "user",
  ADMIN = "admin",
}

export interface IUserTokenPayload {
  id: string;
  role: USER_ROLE;
}

export interface IUser {
  email: string;
  password: string;
  fullName: string;
  role: USER_ROLE;
}

export interface IUserDocument extends IUser, Document {}

const schema = new Schema<IUserDocument>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    fullName: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: [USER_ROLE.USER, USER_ROLE.ADMIN],
      default: USER_ROLE.USER,
    },
  },
  { timestamps: true }
);

export default model<IUserDocument>("user", schema);
