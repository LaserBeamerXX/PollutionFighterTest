/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pollution extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pollution", "./Pollution/costumes/pollution.svg", {
        x: 183.15915915915912,
        y: 46.53603603603605
      }),
      new Costume(
        "pollution level 2",
        "./Pollution/costumes/pollution level 2.svg",
        { x: 241.24164, y: 120.53734999999999 }
      ),
      new Costume(
        "pollution level 3",
        "./Pollution/costumes/pollution level 3.svg",
        { x: -111.61122999999998, y: 129.54705 }
      ),
      new Costume("recycle1", "./Pollution/costumes/recycle1.svg", {
        x: -149.65782168723342,
        y: -103.31368424261814
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "next level" },
        this.whenIReceiveNextLevel
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next level" },
        this.whenIReceiveNextLevel2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 3" },
        this.whenIReceiveLevel3
      )
    ];
  }

  *whenIReceiveNextLevel() {
    this.visible = true;
    this.costume = "recycle1";
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.costume = "pollution";
  }

  *whenIReceiveLevel2() {
    this.visible = true;
    this.costume = "pollution level 2";
  }

  *whenIReceiveNextLevel2() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = true;
    this.costume = "pollution level 3";
  }

  *whenbackdropswitchesto() {
    this.visible = false;
    this.costume = "recycle1";
  }
}
