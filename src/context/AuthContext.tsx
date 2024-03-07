import React, {
    FunctionComponent,
    ReactNode,
    createContext,
    useEffect,
    useState,
} from 'react';
import {getCurrentUser} from 'aws-amplify/auth';
import {Hub} from 'aws-amplify/utils';
import {GetUserQuery} from '../API';
import {fetchUserFromDynamoDb} from '../utils/FetchUserfromDynamoDb';

type AuthContextProps = {
    user: GetUserQuery['getUser'] | null;
    logIn: (newUser: GetUserQuery['getUser']) => void;
    logOut: () => void;
    waitingtoGetCurrentUser: boolean;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: FunctionComponent<{children: ReactNode}> = ({
    children,
}) => {
    const [user, setUser] = useState<GetUserQuery['getUser'] | null>(null);
    const [waitingtoGetCurrentUser, setWaitingtoGetCurrentUser] =
        useState<boolean>(true);

    const logIn = (newUser: GetUserQuery['getUser']) => {
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
                logIn(
                    await fetchUserFromDynamoDb(
                        (
                            await getCurrentUser()
                        ).userId,
                    ),
                );
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
