import { create } from "zustand";

interface PageState {
  search: string;
  startDate: Date | null;
  setSearch: (value: string) => void;
  setStartDate: (value: Date | null) => void;
  reset: () => void; // Reset function
}

interface FilterState {
  [key: string]: PageState;
}

export const useFilterState = create<FilterState>(() => ({}));

export const createPageState = (pageKey: string) => {
  useFilterState.setState((prev) => ({
    ...prev,
    [pageKey]: {
      search: "",
      startDate: new Date(),
      setSearch: (value) =>
        useFilterState.setState((state) => ({
          ...state,
          [pageKey]: { ...state[pageKey], search: value },
        })),
        setStartDate: (value: Date | null) =>
        useFilterState.setState((state) => ({
          ...state,
          [pageKey]: { ...state[pageKey], startDate: value },
        })),
      reset: () =>
        useFilterState.setState((state) => ({
          ...state,
          [pageKey]: { ...state[pageKey], search: "", startDate: new Date() },
        })),
    },
  }));
};
