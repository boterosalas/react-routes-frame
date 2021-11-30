import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import JournalScreen from '../components/auth/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    console.log('AppRouter');
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/auth/*" element={<AuthRouter />} />
                    <Route path="/" element={<JournalScreen />} exact />
                    <Route path="*" element={<AuthRouter />} />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter
