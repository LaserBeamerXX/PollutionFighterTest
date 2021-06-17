/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("background", "./Stage/costumes/background.svg", {
        x: 240,
        y: 180
      }),
      new Costume("background2", "./Stage/costumes/background2.png", {
        x: 480,
        y: 360
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.myVariable = 0;
    this.vars.goingUp = 0;
    this.vars.yv = -28;
    this.vars.sizeChange = 10;
    this.vars.oldX = 77;
    this.vars.oldY = -122;
  }

  *whenGreenFlagClicked() {
    this.costume = "background";
  }
}
