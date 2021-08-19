import React, { useContext } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import { LOGIN_ROUTE } from '../utils/routeConsts';
import { useAuthState } from 'react-firebase-hooks/auth';
import Context from '../context/Context';

const Navigation = () => {
    const { auth } = useContext(Context);
    const [ user ] = useAuthState(auth);

    return (
        <>
            <Navbar variant='dark' style={{ background: '#414042' }}>
                <Container className='p-0'>
                    <Navbar.Brand className='navElem'>Mergelyan Chat</Navbar.Brand>
                    <Nav className='justify-content-end flex-grow-1'>
                        {
                            user ?
                                <button className='btnbrd'
                                        onClick={() => auth.signOut()}>Logout</button>
                                :
                                null
                                // <NavLink to={LOGIN_ROUTE}>
                                //     <button className='btnbrd'>Login</button>
                                // </NavLink>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;

