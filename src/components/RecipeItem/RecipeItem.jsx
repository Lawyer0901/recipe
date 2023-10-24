import PropTypes from 'prop-types';

export const RecipeItem = ({ image, name, time, servings, calories }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h2>
        <span> {name} </span>
      </h2>
      <p>
        Time: <span>{time} </span>
      </p>
      <p>
        Servings: <span> {servings} </span>
      </p>
      <p>
        Calories: <span>{calories} </span>
      </p>
    </li>
  );
};

RecipeItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  servings: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
};
