import { signInWithGooglePopup } from '../../utils/firebase/firebase';

const SignIn = () => {
    const logGoogleUser = async () => {
        await signInWithGooglePopup()
    };

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    )
}

export default SignIn;