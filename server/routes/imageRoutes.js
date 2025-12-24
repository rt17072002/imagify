import express from "express"
import userAuth from "../middlewares/auth.js";
import { generatImage } from "../controllers/imageController.js";

const imageRouter = express.Router();

imageRouter.post("/generate-image", userAuth, generatImage);

export default imageRouter;