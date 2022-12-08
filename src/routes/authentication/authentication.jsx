import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form';

const Authentication = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default Authentication;