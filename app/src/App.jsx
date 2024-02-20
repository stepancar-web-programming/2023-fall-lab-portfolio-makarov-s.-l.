import { Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PortfolioPage from './components/pages/PortfolioPage';

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
    );
}

export default App;
