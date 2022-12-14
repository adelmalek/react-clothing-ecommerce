import { useState, useContext } from 'react';

import './sign-in-form.scss';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import { UserContext } from '../../contexts/user';

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

    const { setCurrentUser } = useContext(UserContext);

    const signInWithGoogle = async () => {
        const response = await signInWithGooglePopup();
        setCurrentUser(response.user);
        await createUserDocumentFromAuth(response.user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormField({...formField, [name]: value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthWithEmailAndPassword(email, password);
            setCurrentUser(user);
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
                    <Button buttonType='google-sign-in' type='button' onClick={signInWithGoogle}>
                        Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;