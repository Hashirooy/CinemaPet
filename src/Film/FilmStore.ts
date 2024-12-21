import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Film } from "./Film";
export interface useFilmsStore {
  films: Film[];
  currentFilm: Film | null;
  actions: {
    addFilm: (newFilms: Film[]) => void;
    clearFilms: () => void;
    setCurrentFilm: (film: Film) => void;
    getFilm: () => Film;
  };
}

export const useFilmsStore = create<useFilmsStore>()(
  persist(
    (set, get) => ({
      films: [],
      currentFilm: null,
      actions: {
        addFilm: (newFilms: Film[]) =>
          set(({ films }) => ({ films: films.concat(newFilms) })),
        clearFilms: () => set({ films: [] }),
        setCurrentFilm: (film: Film) => set((state) => ({ currentFilm: film })),
        getFilm: () => (get().currentFilm as Film) || null,
      },
    }),
    {
      name: "plan-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: ({ currentFilm, films }) => ({ currentFilm, films }),
    }
  )
);
