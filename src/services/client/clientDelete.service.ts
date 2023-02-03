import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/appError";

const clientDeleteService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clients = await clientRepository.find();

  const account = clients.find((client) => client.id === id);

  if (!account) {
    throw new AppError(404, "User Not Found");
  }
  if (account.isActive === false) {
    throw new AppError(400, "User Already Deleted");
  }

  await clientRepository.update(account!.id, { isActive: false });

  return true;
};

export default clientDeleteService;
