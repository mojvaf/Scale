import { Schema, model, Document } from "mongoose";

export interface IData {
  parameter1: number;
  parameter2: number;
  parameter3: number;
  parameter4: number;
  parameter5: number;
  parameter6: number;
  parameter7: number;
  parameter8: number;
  parameter9: number;
}

export interface IDataDocument extends IData, Document {}

const dataSchema = new Schema<IDataDocument>(
  {
    parameter1: {
      type: Number,
    },
    parameter2: {
      type: Number,
    },
    parameter3: {
      type: Number,
    },
    parameter4: {
      type: Number,
    },
    parameter5: {
      type: Number,
    },
    parameter6: {
      type: Number,
    },
    parameter7: {
      type: Number,
    },
    parameter8: {
      type: Number,
    },
    parameter9: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default model<IDataDocument>("Data", dataSchema);
