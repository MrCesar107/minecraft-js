import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [
    {
      key: nanoid(),
      position: [1, 0.5, 10],
      texture: "dirt",
    },
    {
      key: nanoid(),
      position: [2, 0.5, 10],
      texture: "wood",
    },
  ],
  addCube: (x, y, z) => {
    set((previousState) => ({
      cubes: [
        ...previousState.cubes,
        {
          keys: nanoid(),
          position: [x, y, z],
          texture: previousState.texture,
        },
      ],
    }));
  },
  removeCube: () => {},
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
