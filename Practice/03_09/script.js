const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  PocketDepth: {
    left: 100,
    right: 100,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newPocketDepth: function (PocketRight, PocketLeft) {
    this.PocketDepth.left = PocketLeft;
    this.PocketDepth.right = PocketRight;
  },
};

console.log("pocketDepth", backpack.PocketDepth.left);

backpack.newPocketDepth(200, 300);

console.log("pocketdepthnew", backpack.PocketDepth.left);
