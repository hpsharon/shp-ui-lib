import { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
interface ButtonProps {
    text: string;
    type: string;
    onClick: PropTypes.func;
}
export declare const Button: FunctionComponent<ButtonProps>;
export {};
