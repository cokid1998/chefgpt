import { create } from "zustand";
import { combine } from "zustand/middleware";

const init = {
  test: 1,
};

const useTestStore = create(
  combine(init, (set, get) => {
    return {
      actions: {
        setTest: () => {
          set({ test: 2 });
        },
        getTest: () => {
          console.log(get().test);
        },
      },
    };
  })
);

export const useTest = () => {
  return useTestStore((store) => store.test);
};

export const useSetTest = () => {
  return useTestStore((store) => store.actions.setTest);
};

export const useGetTest = () => {
  return useTestStore((store) => store.actions.getTest);
};
