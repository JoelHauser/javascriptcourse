import Backpack from "./Backpack.js";

class Laptop {
  constructor(resolution, GPU, CPU, RAM, Storage) {
    this.resolution = resolution;
    this.GPU = GPU;
    this.CPU = CPU;
    this.RAM = RAM;
    this.Storage = Storage;
  }
  toggleRAM(canReplace) {
    this.RAM = canReplace;
  }
  toggleGPU(canReplace) {
    this.GPU = canReplace;
  }
}

const myLaptop = new Laptop(
  `1080p`,
  `Nvidia`,
  `Intel`,
  `32gb`,
  `1tb`,
  true,
  false
);

const myBackpack = new Backpack(`stuffs`);

console.log(myBackpack);
console.log(myLaptop);
