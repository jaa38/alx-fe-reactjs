import { Router, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <h1>Recipe Sharing App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />

        <Route
          path="/recipe/:id"
          element={<RecipeDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
