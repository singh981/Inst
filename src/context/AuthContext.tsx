import React, {
    FunctionComponent,
    ReactNode,
    createContext,
    useEffect,
    useState,
} from 'react';
import { AuthUser, getCurrentUser } from 'aws-amplify/auth';
import { Hub } from 'aws-amplify/utils';
type AuthContextProps = {
    user: AuthUser | null;
    logIn: (newUser: AuthUser) => void;
    logOut: () => void;
    waitingtoGetCurrentUser: boolean;
};

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider: FunctionComponent<{ children: ReactNode }> = ({
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
    useEffect((): any => {
        (async () => {
            try {
                logIn(await getCurrentUser());
            } catch (e) {
                // console.log('Error getting current user', e);
            } finally {
                setWaitingtoGetCurrentUser(false);
            }
        })();

        const hubListenerSignOutCallback = Hub.listen(
            'auth',
            async ({ payload: { event } }) => {
                console.log('Auth event happened: ', event);
                switch (event) {
                    case 'signedIn':
                        logIn(await getCurrentUser());
                        break;
                    case 'signedOut':
                        logOut();
                        break;
                    default:
                        break;
                }
            },
        );

        const hubListenerUserAlreadyAuthenticatedCallback = Hub.listen(
            'UserAlreadyAuthenticatedEvent',
            async ({ payload: { event } }) => {
                console.log('Event happened: ', event);
                switch (event) {
                    case 'UserAlreadyAuthenticated':
                        logIn(await getCurrentUser());
                        break;
                    default:
                        break;
                }
            },
        );

        // Clean up the listener when the component is unmounted
        return () => {
            hubListenerSignOutCallback();
            hubListenerUserAlreadyAuthenticatedCallback();
        };
    }, []);

    return (
        <AuthContext.Provider
            value={{ user, logIn, logOut, waitingtoGetCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
