import {ApolloClient, InMemoryCache, ApolloProvider, gql} from '@apollo/client';
import config from '../aws-exports';

type ApolloClientProviderProps = {
    children: React.ReactNode;
};

const client = new ApolloClient({
    uri: config.aws_appsync_graphqlEndpoint,
    cache: new InMemoryCache(),
    headers: {
        'x-api-key': config.aws_appsync_apiKey,
    },
});

export const ApolloClientProvider: React.FC<ApolloClientProviderProps> = ({
    children,
}) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
