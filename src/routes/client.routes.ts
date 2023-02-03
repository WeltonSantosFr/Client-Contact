import { Router } from "express";
import clientCreateController from "../controllers/client/clientCreate.controller";
import clientDeleteController from "../controllers/client/clientDelete.controller";
import clientListController from "../controllers/client/clientList.controller";
import clientLoginController from "../controllers/client/clientLogin.service";
import clientUpdateController from "../controllers/client/clientUpdate.controller";
import tokenMiddleware from "../middlewares/tokenAuth.middleware";

const routes = Router();

export const clientRoutes = () => {
  routes.post("/", clientCreateController);
  routes.get("/", clientListController);
  routes.delete("/", tokenMiddleware, clientDeleteController);
  routes.patch("/", tokenMiddleware, clientUpdateController);
  routes.post("/login", clientLoginController);

  return routes;
};
