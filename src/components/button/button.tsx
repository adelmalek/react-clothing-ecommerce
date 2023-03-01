import { FC, ButtonHTMLAttributes } from 'react';

import { 
    BaseButton, 
    GoogleSignInButton, 
    InvertedButton, 
    ButtonSpinner 
} from './button.styles';

export enum BUTTON_TYPE_CLASSES {
    base = 'base',
    google = 'google-sign-in',
    inverted = 'inverted'
};

const getButtonType = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton => (
    {
        [BUTTON_TYPE_CLASSES.base] : BaseButton,
        [BUTTON_TYPE_CLASSES.google] : GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted] : InvertedButton
    }[buttonType]
);

export type ButtonProps = {
    buttonType?: BUTTON_TYPE_CLASSES;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, isLoading, ...otherProps }) => {
    const CostumButton = getButtonType(buttonType);

    return (    
        <CostumButton disabled={isLoading} {...otherProps}>
            {isLoading ? <ButtonSpinner /> : children}
        </CostumButton>
    )
};

export default Button;