import create from "zustand";
import { nanoid } from "nanoid";

export const useStore = create((set) => ({
  texture: "dirt",
  cubes: [],
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
  removeCube: (x, y, z) => {
    set((previousState) => ({
      cubes: previousState.cubes.filter((cube) => {
        const [X, Y, Z] = cube.position;
        return X !== x || Y !== y || Z !== z;
      }),
    }));
  },
  setTexture: () => {},
  saveWorld: () => {},
  resetWorld: () => {},
}));
