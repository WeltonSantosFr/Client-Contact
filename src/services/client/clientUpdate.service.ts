import bcrypt from "bcrypt";
import { IClientUpdate } from "./../../interfaces/client/index";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const clientUpdateService = async (
  { name, email, password, phone }: IClientUpdate,
  id: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);
  const client = await clientRepository.findOne({ where: { id } });

  if (!client) {
    throw new AppError(404, "User not found");
  }

  if (password) {
    if (bcrypt.compareSync(password!, client.password)) {
      throw new AppError(403, "Inform a different password");
    }
  }

  await clientRepository.update(id, {
    name: name ? name : client.name,
    email: email ? email : client.email,
    password: password ? bcrypt.hashSync(password!, 10) : client.password,
  });
  const updatedClient = await clientRepository.find({ where: { id } });

  return updatedClient;
};

export default clientUpdateService;
