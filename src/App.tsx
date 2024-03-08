import Navigation from './navigation';
import {AuthProvider} from './context/AuthContext';
import {ApolloClientProvider} from './apollo/ApolloClientProvider';

const App: React.FC = () => (
    <AuthProvider>
        <ApolloClientProvider>
            <Navigation />
        </ApolloClientProvider>
    </AuthProvider>
);

export default App;
