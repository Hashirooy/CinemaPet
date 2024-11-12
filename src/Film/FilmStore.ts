import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Film } from "./Film";
export interface useFilmsStore {
  films: Film[];
  actions: {
    addFilm: (newFilms: Film[]) => void;
  };
}

export const useFilmsStore = create<useFilmsStore>()(
  persist(
    (set) => ({
      films: [],
      actions: {
        addFilm: (newFilms: Film[]) =>
          set(({ films }) => ({ films: films.concat(newFilms) })),
      },
    }),
    {
      name: "plan-storage", // name of the item in the storage (must be unique)
      partialize: ({ films }) => ({
        films,
      }),
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
