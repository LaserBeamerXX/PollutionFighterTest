import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import PicoWalking from "./PicoWalking/PicoWalking.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Levels from "./Levels/Levels.js";
import Pollution from "./Pollution/Pollution.js";
import Pollution2 from "./Pollution2/Pollution2.js";
import Pollution3 from "./Pollution3/Pollution3.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  PicoWalking: new PicoWalking({
    x: -216,
    y: -147,
    direction: -90,
    costumeNumber: 4,
    size: 60,
    visible: true,
    layerOrder: 6
  }),
  Sprite1: new Sprite1({
    x: 0.0000022888182371616494,
    y: -7,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Levels: new Levels({
    x: -4.999997393290357,
    y: -22,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Pollution: new Pollution({
    x: 14.999994723002459,
    y: 12,
    direction: 90,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 5
  }),
  Pollution2: new Pollution2({
    x: -50.25955216039417,
    y: 4.783411316331387,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4
  }),
  Pollution3: new Pollution3({
    x: 60.83812658807268,
    y: -38.97718140413966,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
