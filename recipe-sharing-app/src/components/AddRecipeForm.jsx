import { useState } from 'react';
import useRecipeStore from '../recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const [title, setTitle] = useState('');
  const [desciption, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ id: Date.now(), title, desciption });
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
      />
    </form>
  );
};

export default AddRecipeForm;
