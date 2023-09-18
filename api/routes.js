import { Router } from "express";
import { login, loginRender, registerRender} from "./src/controllers/userController.js";
import { gameHome } from "./src/controllers/gameController.js";

const  route = Router()

route.get("/", gameHome)

route.get("/login", loginRender)
route.post("/login", login)
route.get("/register", registerRender)



export default route

