import React from 'react';
import { PropTypes } from 'prop-types';
import { Container } from './styles';

const Tooltip = ({ title, className = '', children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};
Tooltip.prototype={
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}
export default Tooltip;
