/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PicoWalking extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Pico walk1", "./PicoWalking/costumes/Pico walk1.svg", {
        x: 54,
        y: 71
      }),
      new Costume("Pico walk2", "./PicoWalking/costumes/Pico walk2.svg", {
        x: 54,
        y: 71
      }),
      new Costume("Pico walk3", "./PicoWalking/costumes/Pico walk3.svg", {
        x: 53.77497949929062,
        y: 70.34872784092455
      }),
      new Costume("Pico walk4", "./PicoWalking/costumes/Pico walk4.svg", {
        x: 54,
        y: 70
      })
    ];

    this.sounds = [new Sound("pop", "./PicoWalking/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "set start" },
        this.whenIReceiveSetStart
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "q" }, this.whenKeyQPressed),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
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
        { name: "next part 2" },
        this.whenIReceiveNextPart2
      )
    ];
  }

  *whenIReceiveSetStart() {
    this.goto(-196, -120);
    this.direction = 90;
  }

  *whenKeyQPressed() {
    this.stage.vars.sizeChange = 0;
    for (let i = 0; i < 10; i++) {
      this.size += this.stage.vars.sizeChange;
      this.stage.vars.sizeChange += -1;
      yield;
    }
    this.stage.vars.sizeChange = 0;
    for (let i = 0; i < 10; i++) {
      this.size += this.stage.vars.sizeChange;
      this.stage.vars.sizeChange += 1;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.move(10);
        this.costumeNumber += 1;
      }
      if (this.keyPressed("left arrow")) {
        this.move(10);
        this.rotationStyle = Sprite.RotationStyle.LEFT_RIGHT;
        this.direction = -90;
        this.costumeNumber += 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.yv = 10;
    while (true) {
      if (this.keyPressed("up arrow")) {
        if (this.touching(Color.rgb(2, 2, 2))) {
          this.stage.vars.yv = 15;
          this.stage.vars.goingUp = 1;
          for (let i = 0; i < 10; i++) {
            this.y += this.stage.vars.yv;
            this.stage.vars.yv += -1;
            yield;
          }
          this.stage.vars.goingUp = 0;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.goto(-196, -120);
    this.direction = 90;
    this.size = 60;
    while (true) {
      if (!this.touching(Color.rgb(0, 0, 0)) && this.stage.vars.goingUp == 0) {
        this.y += this.stage.vars.yv;
        this.stage.vars.yv += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked4() {
    while (true) {
      if (this.touching(this.sprites["Pollution2"].andClones())) {
        this.broadcast("level 2");
      }
      yield;
    }
  }

  *whenGreenFlagClicked5() {
    while (true) {
      if (this.touching(this.sprites["Pollution3"].andClones())) {
        this.broadcast("level 3");
      }
      yield;
    }
  }

  *whenGreenFlagClicked6() {
    while (true) {
      if (this.touching(this.sprites["Pollution"].andClones())) {
        this.broadcast("next level");
      }
      yield;
    }
  }

  *whenIReceiveLevel3() {
    while (true) {
      if (this.touching(this.sprites["Pollution"].andClones())) {
        this.broadcast("next part 2");
      }
      yield;
    }
  }

  *whenIReceiveLevel2() {
    while (true) {
      if (this.touching(this.sprites["Pollution"].andClones())) {
        this.broadcast("next part");
      }
      yield;
    }
  }

  *whenIReceiveNextPart2() {
    while (true) {
      if (this.touching(this.sprites["Pollution2"].andClones())) {
        this.stage.costume = "background2";
      }
      yield;
    }
  }
}
