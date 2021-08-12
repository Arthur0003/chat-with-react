import React, { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Context from '../context/Context';
import firebase from 'firebase';

const Login = () => {

    const { auth } = useContext(Context);

    const login = async (event) => {
        event.preventDefault();
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const { user } = await auth.signInWithPopup(provider);
            console.log(user);
        } catch (e) {
            console.log(e);
        }

    };

    return (
        <Container>
            <div className={'loginBlock'} style={{ height: window.innerHeight - 58 }}>
                <Form className='loginForm'>
                    <Button variant='primary' type='submit' className='w-100 h-25'
                            style={{
                                background: '#41e0fd',
                                border: 'none',
                                outline: 'none'
                            }}
                            onClick={login}
                    >
                        <i className='fab fa-google' />
                        &nbsp;
                        Login with Google
                    </Button>
                </Form>
            </div>

        </Container>
    );
};

export default Login;