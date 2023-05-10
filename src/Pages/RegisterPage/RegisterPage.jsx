import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "redux/auth";
import { authOperations } from "redux/auth";
import { Wrapper, Form, Label, Input, Button, Heading, Error } from "./RegisterPage.styled";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector(authSelectors.getUserError);

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }
    
    const handleSubmit = evt => {
        evt.preventDefault();
        if (name === '' || email === '' || password === '') {
            return toast('Please correct the highlighted fields below')
        }
        dispatch(authOperations.register({ name, email, password }));
        resetForm();
    };

    return (
        <Wrapper>
            <Heading>Registration</Heading>

            <Form onSubmit={handleSubmit}>
                <Label>
                    
                    <Input
                        type='text'
                        name='name'
                        value={name}
                        onChange={handleChange}
                        autoComplete='off'
                        autoFocus
                        placeholder="Name"
                        />
                </Label>

                <Label>
                   
                    <Input
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        autoComplete='off'
                        placeholder="E-mail"
                />
                </Label>

                <Label>
                    
                    <Input
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        autoComplete='off'
                        placeholder="Password"
                        />
                </Label>

                <Button type="submit">Sign Up</Button>
                {error && <Error>{error}</Error>}
            </Form>
        </Wrapper>
    );
};

export default RegisterPage;
    
