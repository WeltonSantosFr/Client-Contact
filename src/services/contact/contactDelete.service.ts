import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const contactDeleteService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contacts = await contactRepository.find();

  const account = contacts.find((contact) => contact.id === id);

  if (!account) {
    throw new AppError(404, "Contact Not Found");
  }
  if (account.isActive === false) {
    throw new AppError(400, "Contact Already Deleted");
  }

  await contactRepository.update(account!.id, { isActive: false });

  return true;
};

export default contactDeleteService;
