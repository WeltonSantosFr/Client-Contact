import { IClientUpdate } from "./../../interfaces/client/index";
import { Request, Response } from "express";
import clientUpdateService from "../../services/client/clientUpdate.service";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";

const clientUpdateController = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone }: IClientUpdate = req.body;
    const { id } = req.client;

    const client = await clientUpdateService(
      { name, email, password, phone },
      id
    );

    return res.status(200).json(instanceToPlain(client));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientUpdateController;
