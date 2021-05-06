import { Router } from "express";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/USersController";
import { MessagesController } from "./controllers/MessagesController";

const routes = Router();

/**
 * Tipos de parâmetros
 * 
 * Routes Params = Parâmetros de rotas
 * http://localhost:3333/settings/1
 * 
 * Query Params = Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params = {
 *  
 * }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);

export { routes };