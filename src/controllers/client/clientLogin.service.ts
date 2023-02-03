import { Request, Response } from "express";
import clientLoginService from "../../services/client/clientLogin.service";

const clientLoginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const token = await clientLoginService({ email, password });

  return res.status(200).json({ token });
};

export default clientLoginController;
