import { IClientLogin } from "./../../interfaces/client/index";
import { AppError } from "../../errors/appError";
import { Client } from "../../entities/client.entity";
import bcrypt from "bcrypt";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";

const clientLoginService = async ({ email, password }: IClientLogin) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.email === email);

  if (!account) {
    throw new AppError(403, "Wrong email or password");
  }

  if (!bcrypt.compareSync(password, account.password)) {
    throw new AppError(403, "Wrong email or password");
  }

  const token = jwt.sign({ email: email }, process.env.SECRET_KEY as string, {
    expiresIn: "2h",
    subject: account.id,
  });

  return token;
};

export default clientLoginService;
