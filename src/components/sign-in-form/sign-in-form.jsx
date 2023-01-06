import { useState } from 'react';

import { SignInContainer, HaveAnAccount, ButtonContainer } from './sign-in-form.styles';

import FormInput from '../form-input/form-input';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button';

import { 
    signInWithGooglePopup, 
    signInAuthWithEmailAndPassword 
} from '../../utils/firebase/firebase';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { email, password } = formField;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField({...formField, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthWithEmailAndPassword(email, password);
            setFormField(defaultFormFields);
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email')
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error);
            } 
        }
    }

    return (
        <SignInContainer>
            <HaveAnAccount>Already have an account?</HaveAnAccount>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type='email' 
                    required 
                    name='email' 
                    value={email} 
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    type='password' 
                    required 
                    name='password' 
                    value={password} 
                    onChange={handleChange} 
                />

                <ButtonContainer>
                    <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type='button' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </ButtonContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;