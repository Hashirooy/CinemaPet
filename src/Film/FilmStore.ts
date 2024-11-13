import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Film } from "./Film";
export interface useFilmsStore {
  films: Film[];
  actions: {
    addFilm: (newFilms: Film[]) => void;
    clearFilms: () => void;
  };
}

export const useFilmsStore = create<useFilmsStore>()((set) => ({
  films: [],
  actions: {
    addFilm: (newFilms: Film[]) =>
      set(({ films }) => ({ films: films.concat(newFilms) })),
    clearFilms: () => set({ films: [] }),
  },
}));
