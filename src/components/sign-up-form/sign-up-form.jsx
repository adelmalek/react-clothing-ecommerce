import { useState } from 'react';

import { SignUpContainer, HaveNotAnAccount } from './sign-up-form.styles';

import FormInput from '../form-input/form-input';
import Button, { BUTTON_TYPE_CLASSES} from '../button/button';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    const [formField, setFormField] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formField;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField({...formField, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            setFormField(defaultFormFields);
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use')
            }
            console.log('user creation encountered an error', error)
        }
    }

    return (
        <SignUpContainer>
            <HaveNotAnAccount>Don't have an account?</HaveNotAnAccount>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='DisplayName'
                    type='text' 
                    required 
                    name='displayName' 
                    value={displayName} 
                    onChange={handleChange}
                />

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

                <FormInput
                    label='Confirm Password'
                    type='password' 
                    required 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={handleChange} 
                />

                <Button buttonType={BUTTON_TYPE_CLASSES.base} type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;