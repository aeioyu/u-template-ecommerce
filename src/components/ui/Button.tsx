import React from 'react';
import BSButton from 'react-bootstrap/Button';

const Button: React.FC = ({ children, ...rest }) => {
  return <BSButton {...rest}>{children}</BSButton>;
};

export default Button;
