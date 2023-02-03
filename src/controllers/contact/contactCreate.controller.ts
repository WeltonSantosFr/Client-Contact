import { Request, Response } from "express";
import { AppError, handleError } from "../../errors/appError";
import contactCreateService from "../../services/contact/contactCreate.service";

const contactCreateController = async (req: Request, res: Response) => {
  try {
    const { name, email, phone } = req.body;
    const { id } = req.client;

    const newContact = await contactCreateService({ name, email, phone }, id);

    return res.status(201).json(newContact);
  } catch (error) {
    if (error instanceof AppError) {
      handleError(error, res);
    }
  }
};

export default contactCreateController;
