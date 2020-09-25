/**
 * @class Button
 */
import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types';
import './Buton.scss'

interface ButtonProps {
  text:string
}

export const Button: FunctionComponent<ButtonProps> = ({text}) => {
  return (
    <button>{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired
}
