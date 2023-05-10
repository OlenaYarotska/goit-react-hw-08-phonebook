import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { authOperations } from "redux/auth";
import { Heading, Form, Label, Input, Button, Error } from "Pages/RegisterPage/RegisterPage.styled";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.getUserError);
    
    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        if (email === '' || password === '') {
            return toast('Please correct the highlighted fields below')
        }
        dispatch(authOperations.logIn({ email, password }));
        resetForm();
    };

    return (
        <div>
            <Heading>Log in</Heading>

            <Form onSubmit={handleSubmit}>
                <Label>
                    
                    <Input
                        type='email'
                        name='email'
                        placeholder="E-mail"
                        onChange={handleChange}
                    />
                </Label>

                <Label>
                    
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                </Label>

                <Button type="submit">Sign In</Button>
                 {error && <Error>{error}</Error>}
            </Form>
        </div>
    );
};

export default LoginPage;