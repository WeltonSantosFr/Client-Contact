import { IContactUpdate } from "./../../interfaces/contact/index";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";

const contactUpdateService = async (
  { name, email, phone }: IContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contact = await contactRepository.findOne({ where: { id } });

  if (!contact) {
    throw new AppError(404, "Contact Not Found");
  }

  await contactRepository.update(id, {
    name: name ? name : contact.name,
    email: email ? email : contact.email,
    phone: phone ? phone : contact.phone,
  });

  return true;
};

export default contactUpdateService;
