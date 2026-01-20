import { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe.title);
  const [desciption, setDescription] = useState(recipe.desciption);

  const handleSubmit = (e) => {
    e.preventDefault();

    updateRecipe({
      id: recipe.id,
      title,
      desciption,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea
        value={desciption}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type='submit'>Save Changes</button>
    </form>
  );
};

export default EditRecipeForm