import { Router } from "express";
import contactCreateController from "../controllers/contact/contactCreate.controller";
import contactDeleteController from "../controllers/contact/contactDelete.controller";
import contactListController from "../controllers/contact/contactList.controller";
import contactUpdateController from "../controllers/contact/contactUpdate.controller";
import tokenMiddleware from "../middlewares/tokenAuth.middleware";

const routes = Router();

export const contactRoutes = () => {
  routes.post("/", tokenMiddleware, contactCreateController);
  routes.get("/", contactListController);
  routes.patch("/", tokenMiddleware, contactUpdateController);
  routes.delete("/", tokenMiddleware, contactDeleteController);

  return routes;
};
