import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/routeConsts';
import { useAuthState } from 'react-firebase-hooks/auth';
import Context from '../context/Context';
// import Loader from '../loader/Loader';

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [ user ] = useAuthState(auth);

    return user ?
        (
            <Switch>
                {
                    privateRoutes.map(({ path, Component }, idx) =>
                        <Route path={path} component={Component} exact={true}
                               key={idx} />
                    )
                }
                <Redirect to={CHAT_ROUTE} />
            </Switch>
        )
        :
        (
            <Switch>
                {
                    publicRoutes.map(({ path, Component }, idx) =>
                        <Route path={path} component={Component} exact={true}
                               key={idx} />
                    )
                }
                <Redirect to={LOGIN_ROUTE} />
            </Switch>
        );
};

export default AppRouter;