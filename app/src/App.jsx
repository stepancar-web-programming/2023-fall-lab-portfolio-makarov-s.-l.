import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/pages/MainPage';
import PortfolioPage from './components/pages/PortfolioPage';

function App() {
    return (
        <>
            <h3>Что за хуйян? </h3>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<MainPage />} />
                    <Route path="portfolio" element={<PortfolioPage />} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
