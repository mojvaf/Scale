import { Request, Response } from "express";

interface DataModel {
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

export const processData = async (req: Request, res: Response) => {
  try {
    const {
      parameter1,
      parameter2,
      parameter3,
      parameter4,
      parameter5,
      parameter6,
      parameter7,
      parameter8,
      parameter9,
    }: DataModel = req.body;

    // Checking if all parameters are numbers
    if (
      typeof parameter1 !== "number" ||
      typeof parameter2 !== "number" ||
      typeof parameter3 !== "number" ||
      typeof parameter4 !== "number" ||
      typeof parameter5 !== "number" ||
      typeof parameter6 !== "number" ||
      typeof parameter7 !== "number" ||
      typeof parameter8 !== "number" ||
      typeof parameter9 !== "number"
    ) {
      return res.status(400).json({ error: "All parameters must be numbers" });
    }

    res.status(200).json({ message: "Data processed successfully" });
  } catch (error) {
    console.error("Error processing data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
