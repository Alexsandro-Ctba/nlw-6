import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserReceiveComplimentsConntroller } from "./controllers/ListUserReceiveComplimentsConntroller";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListUserSendComplimentsConntroller } from "./controllers/ListUserSendComplimentsConntroller";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAthenticated } from "./middlewares/ensureAthenticated";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsConntroller()
const listUserReceiveCompliments = new ListUserReceiveComplimentsConntroller()
const listTagsController = new ListTagController()
const listUsersController = new ListUsersController()

router.post("/users", createUserController.handle);
router.get("/users", ensureAthenticated, listUsersController.handle);
router.post("/tags", ensureAthenticated, ensureAdmin, createTagController.handle);
router.get("/tags", ensureAthenticated, listTagsController.handle);
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAthenticated, listUserSendComplimentsController.handle)
router.get("/users/compliments/receive", ensureAthenticated, listUserReceiveCompliments.handle)

export { router };

