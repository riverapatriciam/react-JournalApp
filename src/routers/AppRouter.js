import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { JorunalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route path='/' element={<JorunalScreen />} />
                {/* Redirect */}
                <Route path='*' element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
    )
}