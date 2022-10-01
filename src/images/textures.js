import { TextureLoader } from "three";
import { dirtImg, grasImg, glassImg, woodImg, logImg } from "./images";

const dirtTexture = new TextureLoader(dirtImg);
const logTexture = new TextureLoader(logImg);
const glassTexture = new TextureLoader(glassImg);
const woodTexture = new TextureLoader(woodImg);
const groundTexture = new TextureLoader(groundImg);

export { dirtTexture, logTexture, glassTexture, woodTexture, groundTexture };
