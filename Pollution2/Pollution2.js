/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pollution2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("recycle", "./Pollution2/costumes/recycle.svg", {
        x: -181.8912839753906,
        y: -100.22518460991472
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
        { name: "level 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 2" },
        this.whenIReceiveLevel2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next part" },
        this.whenIReceiveNextPart
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next part 2" },
        this.whenIReceiveNextPart2
      )
    ];
  }

  *whenIReceiveNextLevel() {
    this.visible = true;
    this.costume = "recycle";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = false;
  }

  *whenIReceiveLevel2() {
    this.visible = false;
    this.costume = "recycle";
  }

  *whenIReceiveNextPart() {
    this.visible = false;
    this.costume = "recycle";
  }

  *whenIReceiveNextPart2() {
    this.visible = true;
    this.costume = "recycle";
  }
}
