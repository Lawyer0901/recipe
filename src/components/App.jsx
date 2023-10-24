import { PageTitle } from './PageTitle/PageTitle';
import { RecipeList } from './RecipeList/RecipeList';
import menu from '../data/recipes.json';

export const App = () => {
  return (
    <>
      <PageTitle text="This is the world best recipes" />
      <RecipeList recipes={menu} />
    </>
  );
};
