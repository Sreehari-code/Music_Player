import { create } from "zustand";
import { persist } from "zustand/middleware";

export const usePlaylistStore = create(
  persist(
    (set) => ({

      playlist: [],

      addToPlaylist: (song) =>
        set((state) => {
          const exists = state.playlist.some((s) => s.id === song.id);
          if (exists) return state;
          return { playlist: [...state.playlist, song] };
        }),

      removeFromPlaylist: (id) =>
        set((state) => ({
          playlist: state.playlist.filter((s) => s.id !== id),
        })),
    }),

    {
      name: "playlist-storage", 
    }
  )
);
