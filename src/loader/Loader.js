import React from 'react';
import { Container } from 'react-bootstrap';

const Loader = () => {
    return (
        <Container>
            <div className={'loginBlock'} style={{ height: window.innerHeight - 58 }}>
                <div className='loginForm'>
                    <div className='lds-ripple'>
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Loader;