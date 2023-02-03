import { Express } from "express";
import { clientRoutes } from "./client.routes";
import { contactRoutes } from "./contact.routes";

export const appRoutes = (app: Express) => {
  app.use("/client", clientRoutes());
  app.use("/contact", contactRoutes());
};
