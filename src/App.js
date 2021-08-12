import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import { useContext } from 'react';
import Context from './context/Context';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loader from './loader/Loader';

function App() {
    const { auth } = useContext(Context);
    const [ , loading ] = useAuthState(auth);

    if (loading) {
        return <Loader />;
    }

    return (
        <BrowserRouter>
            <Navigation />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
