import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Buttons = (props) => {
  return (
    <Link to={props.link}>
      <Button
        type={props.type}
        bg={props.bg === 'brand' ? 'brand' : 'transparent'}
        border={props.bg === 'secondary' ? '1px solid #000' : 'none'}
        color={props.bg === 'brand' ? 'textLight' : 'textDark'}
        _hover={'none'}
        _active={'none'}
      >
        {props.text}
      </Button>
    </Link>
  );
};

export default Buttons;
