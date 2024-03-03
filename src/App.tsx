import Navigation from './navigation';
import {AuthProvider} from './context/AuthContext';

const App: React.FC = () => (
    <AuthProvider>
        <Navigation />
    </AuthProvider>
);

export default App;
