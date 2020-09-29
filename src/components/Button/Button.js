var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import { PACKAGE_NAME, BUTTON_CLASS } from '../../Constants.js';
import classNames from 'classnames';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import styledProps from 'styled-props';
import { darken, rgba } from 'polished';
import theme from '../../Theme';
var StyledButton = styled.button(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    background: ", ";\n    color: ", ";   \n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    \n    &:hover  { \n    background-color: ", ";\n}\n\n  &:focus {\n    outline:none;\n    background:  ", ";\n    box-shadow: 0 0 0 0.2rem ", "\n}"], ["\n    background: ", ";\n    color: ", ";   \n    display: inline-block;\n    font-weight: 400;\n    text-align: center;\n    vertical-align: middle;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    border: 1px solid transparent;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: .25rem;\n    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    \n    &:hover  { \n    background-color: ",
    ";\n}\n\n  &:focus {\n    outline:none;\n    background:  ", ";\n    box-shadow: 0 0 0 0.2rem ",
    "\n}"
    /**
     *
     * @param text text to display
     * @param type one of the following: primary, secondary, success, danger, warning, info, light. Default: primary
     * @param onClick function to fire on click
     * @constructor
     */
])), styledProps(theme.background, 'type'), styledProps(theme.color, 'type'), function (props) { return darken(0.07, styledProps(theme.background, 'type')(props)); }, function (props) { return darken(0.07, styledProps(theme.background, 'type')(props)); }, function (props) { return rgba(styledProps(theme.background, 'type')(props), 0.5); });
/**
 *
 * @param text text to display
 * @param type one of the following: primary, secondary, success, danger, warning, info, light. Default: primary
 * @param onClick function to fire on click
 * @constructor
 */
var DEFAULT_STYLE = 'primary';
export var Button = function (_a) {
    var text = _a.text, type = _a.type, onClick = _a.onClick;
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(StyledButton, { onClick: onClick, type: type || DEFAULT_STYLE, className: classNames(PACKAGE_NAME, BUTTON_CLASS) }, text || '')));
};
Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired
};
var templateObject_1;
