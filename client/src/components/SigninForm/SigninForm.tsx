import './SignInForm.scss';
import { FormEvent, useState } from 'react';

import './SignInForm.scss';

export type SignInFormProps = {
    type: 'registration' | 'login';
}

function SignInForm({type}: SignInFormProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const baseurl = 'https://blahblah' // todo change me;
    const isLogin = type === 'login';
    const formEndpoint = isLogin ? 'login' : 'signup';
    const formTitle = isLogin ? 'Log In' : 'Sign Up'

    const handleSubmit = () => {
        // todo if signup, error handling for invalid email and password lengths
        // todo if login, error handling for invalid email and password format
        // todo look at lifting state to app level and/or storing logged in state in a context
        // todo refer back to ticket for more info
        fetch(baseurl + formEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return (
        <div data-testid="sign-in-form" className="sign-in-form">
            <h2>{ formTitle }</h2>
            <form onSubmit={ (event) => {
                event.preventDefault();
                handleSubmit()
            } }>
                <input type="email" placeholder="Email" value={ email }
                       onInput={ (event: FormEvent<HTMLInputElement>) => setEmail(event.currentTarget.value) }/>
                <input type="password" placeholder="Password" value={ password }
                       onInput={ (event: FormEvent<HTMLInputElement>) => setPassword(event.currentTarget.value) }/>
                <button type="submit">{ formTitle }</button>
            </form>
        </div>
    );
}

export default SignInForm;
