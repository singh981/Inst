import React, {
    FunctionComponent,
    ReactNode,
    createContext,
    useEffect,
    useState,
} from 'react';
import {AuthUser, getCurrentUser, fetchUserAttributes} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';

type AuthContextProps = {
    user: AuthUser | null;
    logIn: (newUser: AuthUser) => void;
    logOut: () => void;
    waitingtoGetCurrentUser: boolean;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: FunctionComponent<{children: ReactNode}> = ({
    children,
}) => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [waitingtoGetCurrentUser, setWaitingtoGetCurrentUser] =
        useState<boolean>(true);

    const logIn = (newUser: AuthUser) => {
        setUser(newUser);
    };

    const logOut = () => {
        setUser(null);
    };

    // Here we are using the useEffect hook to get the current user when the app starts.
    // We are also using the setWaitingtoGetCurrentUser to control the loading spinner.
    useEffect(() => {
        (async () => {
            try {
                logIn({
                    ...(await getCurrentUser()),
                    ...(await fetchUserAttributes()),
                });
            } catch (e) {
                // console.log('Error getting current user', e);
            } finally {
                setWaitingtoGetCurrentUser(false);
            }
        })();

        const hubListenerCancelCallback = Hub.listen(
            'auth',
            ({payload: {event}}) => {
                console.log('A new auth event has happened: ', event);
                event === 'signedOut' && logOut();
            },
        );

        // Clean up the listener when the component is unmounted
        return () => hubListenerCancelCallback();
    }, []);

    return (
        <AuthContext.Provider
            value={{user, logIn, logOut, waitingtoGetCurrentUser}}>
            {children}
        </AuthContext.Provider>
    );
};
