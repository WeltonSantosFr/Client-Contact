import { Request, Response } from "express";
import clientDeleteService from "../../services/client/clientDelete.service";
import { AppError, handleError } from "../../errors/appError";

const clientDeleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.client;

    const client = await clientDeleteService(id);

    return res.status(200).json({ message: "User deleted with success!" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientDeleteController;
