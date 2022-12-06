import { useState } from 'react';

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

    console.log(formField)

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
        <div>
            <h1>Sign up with your email and password</h1>

            <form onSubmit={handleSubmit}>
                <label>Display Name</label>
                <input type='text' required name='displayName' value={displayName} onChange={handleChange} />

                <label>Email</label>
                <input type='email' required name='email' value={email} onChange={handleChange} />

                <label>Password</label>
                <input type='password' required name='password' value={password} onChange={handleChange} />

                <label>Confirm Password</label>
                <input type='password' required name='confirmPassword' value={confirmPassword} onChange={handleChange} />

                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;