import { RecipeItem } from 'components/RecipeItem/RecipeItem';
import PropTypes from 'prop-types';
import { List } from 'components/RecipeItem/RecipeItem.styled';

export const RecipeList = ({ recipes }) => {
  return (
    <List>
      {recipes.map(el => (
        <RecipeItem
          key={el.id}
          image={el.image}
          name={el.name}
          time={el.time}
          servings={el.servings}
          calories={el.calories}
        />
      ))}
    </List>
  );
};

RecipeList.prototype = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      servings: PropTypes.string.isRequired,
      calories: PropTypes.string.isRequired,
    })
  ),
};
