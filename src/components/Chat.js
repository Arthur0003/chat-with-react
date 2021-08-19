import React, { useContext, useRef, useState } from 'react';
import Context from '../context/Context';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from '../loader/Loader';
import firebase from 'firebase';

const Chat = () => {
    const inpref = useRef();
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [inpVal, setInpVal] = useState('');
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    );
    const g = 1;

    const sendMessage = () => {
        if (inpVal.trim()) {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                text: inpVal,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
        }
        setInpVal('');
        inpref.current.focus();
    };

    const sendMessageByKey = (event) => {
        if (event.key === 'Enter' && inpVal.trim()) {
            firestore.collection('messages').add({
                uid: user.uid,
                displayName: user.displayName,
                text: inpVal,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            });
            setInpVal('');
            inpref.current.focus();
        }
    };

    if (loading) return <Loader />;

    return (
        <Container className="p-0">
            <h2 className="userName p-0">{user?.displayName}</h2>
            <div
                className="container justify-content-center mt-5 p-0"
                style={{ height: window.innerHeight - 58 }}
            >
                <div className="chatBlock border border-secondary p-3">
                    {messages.map((message) => (
                        <Card
                            style={{
                                width: 'fit-content',
                                border:
                                    user?.uid === message.uid
                                        ? '3px solid red'
                                        : '3px solid blue',
                                marginLeft: user?.uid === message.uid ? 'auto' : 0,
                            }}
                            key={message.uid}
                            className="p-1 mb-2 "
                        >
                            <Card.Body className="p-0 m-0">
                                <Card.Title>{message.displayName}</Card.Title>
                                <Card.Text>{message.text}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
                <div className="d-flex mt-3">
                    <Form.Control
                        type="text"
                        value={inpVal}
                        onChange={(e) => setInpVal(e.target.value)}
                        className="me-3 border-secondary"
                        placeholder="Type your message..."
                        onKeyPress={sendMessageByKey}
                        ref={inpref}
                    />
                    <Button onClick={sendMessage} className="flex-grow-1 w-25">
                        Send
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Chat;
