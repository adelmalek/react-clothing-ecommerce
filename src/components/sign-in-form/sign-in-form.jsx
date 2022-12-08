import { useState } from 'react';

import './sign-in-form.scss';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth, 
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
        const response = await signInWithGooglePopup();
        await createUserDocumentFromAuth(response.user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField({...formField, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signInAuthWithEmailAndPassword(email, password);
            console.log(response);
            setFormField(defaultFormFields);
        } catch (error) {
        }
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
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

                <div className='buttons-container'>
                    <Button buttonType='default' type='submit'>Sign In</Button>
                    <Button buttonType='google-sign-in' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;