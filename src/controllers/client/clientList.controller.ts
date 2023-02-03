import { Request, Response } from "express";
import clientListService from "../../services/client/clientList.service";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";

const clientListController = async (req: Request, res: Response) => {
  try {
    const clients = await clientListService();

    return res.send(instanceToPlain(clients));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default clientListController;
