import PropTypes from 'prop-types';
import { MainTitle } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <MainTitle>{text}</MainTitle>;
};

PageTitle.prototype = {
  text: PropTypes.string.isRequired,
};
