import { IClientRequest } from "./../../interfaces/client/index";

import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import bcrypt from "bcrypt";
import { AppError } from "../../errors/appError";

const clientCreateService = async ({
  name,
  email,
  password,
  phone,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ email });

  if (client && client.isActive) {
    throw new AppError(400, "User already exists");
  }

  if (client && !client.isActive) {
    await clientRepository.update(client.id, { isActive: false });
    return client;
  }

  const newClient = new Client();
  newClient.name = name;
  newClient.email = email;
  newClient.password = bcrypt.hashSync(password, 10);
  newClient.phone = phone;
  clientRepository.create(newClient);

  await clientRepository.save(newClient);

  return newClient;
};

export default clientCreateService;
