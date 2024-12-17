import './SigninForm.scss';

export type SigninFormProps = {
    type: 'registration' | 'login';
}

function SigninForm({type}: SigninFormProps) {
    const isLogin = type === 'login';
    // const formEndpoint = isLogin ? 'login' : 'signup';
    const formTitle = isLogin ? 'Log In' : 'Sign Up'

    return (
        <div className="signin-form">
            <h2>{ formTitle }</h2>
            <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">{ formTitle }</button>
            </form>
        </div>
    );
}

export default SigninForm;
