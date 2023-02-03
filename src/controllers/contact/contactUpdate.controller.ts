import { IContactUpdate } from "../../interfaces/contact";
import { Request, Response } from "express";
import contactUpdateService from "../../services/contact/contactUpdate.service";
import { AppError, handleError } from "../../errors/appError";
import { instanceToPlain } from "class-transformer";

const contactUpdateController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone }: IContactUpdate = req.body;
    const { id } = req.params;

    const contact = await contactUpdateService({ name, email, phone }, id);

    return res.status(200).json(instanceToPlain(contact));
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default contactUpdateController;
