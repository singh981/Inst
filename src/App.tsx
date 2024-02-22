import {StyleProp, Text, View, ViewStyle} from 'react-native';
import Navigation from './navigation';
import {
    Authenticator,
    useAuthenticator,
    withAuthenticator,
    WithAuthenticatorOptions,
    ThemeProvider,
    defaultDarkModeOverride,
    useTheme,
} from '@aws-amplify/ui-react-native';
import {weight} from './theme/fonts';
import {ReactNode} from 'react';

const MyHeader = ({
    children,
    style,
}: {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
}) => {
    const {
        tokens: {colors, fontSizes, borderWidths},
    } = useTheme();
    console.log({borderWidths});
    return (
        <View style={style}>
            <Text
                style={{
                    fontSize: fontSizes.xxl,
                    color: colors.secondary[80],
                    borderWidth: borderWidths.large,
                }}>
                {children}
            </Text>
        </View>
    );
};

const MySignInFooter = () => <Text>My New FootFooter</Text>;

const App: React.FC = () => {
    // const {
    //     tokens: {colors, fontSizes, fontWeights},
    // } = useTheme();
    // console.log('fontSizes', fontSizes);

    return (
        <ThemeProvider
            theme={{
                tokens: {
                    colors: {
                        primary: {
                            10: '{colors.pink.10}',
                            20: '{colors.pink.20}',
                            40: '{colors.pink.40}',
                            60: '{colors.pink.60}',
                            80: '{colors.pink.80}',
                            90: '{colors.pink.90}',
                            100: '{colors.pink.100}',
                        },
                    },
                },
            }}>
            <Authenticator.Provider>
                <Authenticator
                    components={{
                        SignIn: ({fields, ...props}) => (
                            <Authenticator.SignIn
                                {...props}
                                // hideSignUp
                                displayName="Sign InN"
                                // style={{
                                //     borderRadius: 40,
                                // }}
                                // Footer={MySignInFooter}
                                fields={fields.map(field => ({
                                    ...field,
                                }))}
                                // Header={MyHeader}
                            />
                        ),
                    }}
                    {...{
                        hideDefault: true,
                        signUpAttributes: ['email', 'name', 'phone_number'],
                        formFields: {
                            signUp: {
                                name: {
                                    label: 'Name',
                                    placeholder: 'Enter your namee',
                                    isRequired: true,
                                    order: 1,
                                },
                                username: {
                                    label: 'Username',
                                    placeholder: 'Enter your usernamee',
                                    isRequired: true,
                                    order: 2,
                                },
                                email: {
                                    label: 'Email',
                                    placeholder: 'Enter your emaile',
                                    isRequired: true,
                                    order: 3,
                                },
                                phone_number: {
                                    label: 'Phone Number',
                                    placeholder: 'Enter your phone numbere',
                                    required: true,
                                    order: 4,
                                },
                                password: {
                                    label: 'Password',
                                    placeholder: 'Enter your passworde',
                                    required: true,
                                    order: 5,
                                },
                            },
                        },
                    }}>
                    <Navigation />
                </Authenticator>
            </Authenticator.Provider>
        </ThemeProvider>
    );
};

export default App;