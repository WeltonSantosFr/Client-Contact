import { Request, Response } from "express";
import contactListService from "../../services/contact/contactList.service";
import { AppError, handleError } from "../../errors/appError";

const contactListController = async (req: Request, res: Response) => {
  try {
    const contacts = await contactListService();

    return res.send(contacts);
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default contactListController;
