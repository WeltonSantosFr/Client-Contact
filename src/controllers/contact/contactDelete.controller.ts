import { Request, Response } from "express";
import contactDeleteService from "../../services/contact/contactDelete.service";
import { AppError, handleError } from "../../errors/appError";

const contactDeleteController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const contact = await contactDeleteService(id);

    return res.status(200).json({ message: "User deleted with success" });
  } catch (err) {
    if (err instanceof AppError) {
      handleError(err, res);
    }
  }
};

export default contactDeleteController;
