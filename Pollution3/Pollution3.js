/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pollution3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("recyclelvl3", "./Pollution3/costumes/recyclelvl3.svg", {
        x: -90.48529413297348,
        y: 205.88903327162757
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "next part" },
        this.whenIReceiveNextPart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 3" },
        this.whenIReceiveLevel3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 3" },
        this.whenIReceiveLevel4
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "next part 2" },
        this.whenIReceiveNextPart2
      )
    ];
  }

  *whenIReceiveNextPart() {
    this.visible = true;
    this.costume = "recyclelvl3";
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveLevel3() {
    this.visible = false;
    this.costume = "recyclelvl3";
  }

  *whenIReceiveLevel4() {
    this.visible = false;
  }

  *whenIReceiveNextPart2() {
    this.visible = false;
    this.costume = "recyclelvl3";
  }
}
