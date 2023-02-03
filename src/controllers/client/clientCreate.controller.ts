import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import clientCreateService from "../../services/client/clientCreate.service";

const clientCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone } = req.body;

    const newClient = await clientCreateService({
      name,
      email,
      password,
      phone,
    });

    return res.status(201).json(instanceToPlain(newClient));
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default clientCreateController;
