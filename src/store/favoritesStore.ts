import { create } from "zustand";
import type { CatItem } from "../shared/types/catItem";

type FavoritesState = {
    favoritesById: Record<string, CatItem>;
    toggleFavorite: (cat: CatItem) => void;
};

export const useFavoritesStore = create<FavoritesState>((set) => ({
    favoritesById: {},
    toggleFavorite: (cat) =>
        set((state) => {
            const next = { ...state.favoritesById };
            if (next[cat.id]) delete next[cat.id];
            else next[cat.id] = cat;
            return { favoritesById: next };
        }),
}));
