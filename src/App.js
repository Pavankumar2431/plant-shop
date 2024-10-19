// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ThankYou from './components/ThankYou';
// Import other components as needed

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/thankyou" element={<ThankYou />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;
