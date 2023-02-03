import { IContactRequest } from "../../interfaces/contact";

import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/appError";
import { Client } from "../../entities/client.entity";

const contactCreateService = async (
  { name, email, phone }: IContactRequest,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const clientRepository = AppDataSource.getRepository(Client);

  const client = await clientRepository.findOneBy({ id: id });

  if (!client) {
    throw new AppError(404, "Client does not exists");
  }
  console.log(client);
  const contact = await contactRepository.findOneBy({ email });

  if (contact) {
    throw new AppError(400, "Contact already exists");
  }

  const newContact = contactRepository.create({
    name: name,
    email: email,
    phone: phone,
    client: client,
  });

  await contactRepository.save(newContact);

  return newContact;
};

export default contactCreateService;
