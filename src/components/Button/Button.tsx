import React, { FunctionComponent } from 'react'
import { PACKAGE_NAME, BUTTON_CLASS } from '../../Constants.js'
import classNames from 'classnames'
import styled, { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'
import styledProps from 'styled-props'
import { darken, rgba } from 'polished'
import theme from '../../Theme'

interface ButtonProps {
  text:string,
  type:string,
  onClick: PropTypes.func
}

const StyledButton = styled.button`
    background: ${styledProps(theme.background, 'type')};
    color: ${styledProps(theme.color, 'type')};   
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
    &:hover  { 
    background-color: ${
      props => darken(
        0.07,
        styledProps(theme.background, 'type')(props)
      )
    };
}

  &:focus {
    outline:none;
    background:  ${props => darken(0.07, styledProps(theme.background, 'type')(props))};
    box-shadow: 0 0 0 0.2rem ${
      props => rgba(
        styledProps(theme.background, 'type')(props), 0.5
      )
    }
}`

/**
 *
 * @param text text to display
 * @param type one of the following: primary, secondary, success, danger, warning, info, light. Default: primary
 * @param onClick function to fire on click
 * @constructor
 */
const DEFAULT_STYLE = 'primary'
export const Button: FunctionComponent<ButtonProps> = ({text, type, onClick}) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButton onClick={onClick} type={type || DEFAULT_STYLE} className={classNames(PACKAGE_NAME, BUTTON_CLASS)}>{text || ''}</StyledButton>
    </ThemeProvider>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
