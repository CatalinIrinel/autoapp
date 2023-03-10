import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

export const Buttons = (props) => {
  return (
    <Button
      type={props.type}
      bg={props.bg === 'brand' ? 'brand' : 'transparent'}
      border={props.bg ? '1px solid #3182ce' : 'none'}
      color={props.bg ? 'textLight' : 'textDark'}
      _hover={'none'}
      _active={'none'}
      onClick={props.onClick || ''}
    >
      {props.text}
    </Button>
  );
};

export const LinkButtons = (props) => {
  return (
    <Link to={props.link}>
      <Button
        type={props.type}
        bg={props.bg === 'brand' ? 'brand' : 'transparent'}
        border={props.bg ? '2px solid #3182ce' : 'none'}
        color={props.bg ? 'textLight' : 'textDark'}
        _hover={'none'}
        _active={'none'}
      >
        {props.text}
      </Button>
    </Link>
  );
};
