/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Levels extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("level one", "./Levels/costumes/level one.svg", {
        x: 222.75,
        y: 52.433655000000044
      }),
      new Costume("level 2", "./Levels/costumes/level 2.svg", {
        x: 224.75,
        y: 136.433645
      }),
      new Costume("level 3", "./Levels/costumes/level 3.svg", {
        x: 180.75,
        y: 141.433645
      })
    ];

    this.sounds = [new Sound("pop", "./Levels/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 3" },
        this.whenIReceiveLevel3
      )
    ];
  }

  *whenIReceiveLevel2() {
    this.costumeNumber += 1;
    this.broadcast("set start");
  }

  *whenGreenFlagClicked() {
    this.costume = "level one";
  }

  *whenIReceiveLevel3() {
    this.costumeNumber += 1;
    this.broadcast("set start");
  }
}
