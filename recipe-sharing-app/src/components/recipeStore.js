import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],

  // ❤️ Favorite recipe IDs
  favorites: [],

  // ⭐ Recommended recipes
  recommendations: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // Simple mock logic:
    // Recommend recipes similar to favorites
    const recommended = recipes.filter(
      (recipe) =>
        favorites.includes(recipe.id) && Math.random() > 0.5
    );

    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
