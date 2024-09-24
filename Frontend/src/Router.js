import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './containers/footer';
import Index from './pages/indexPage';
import SignIn from './pages/signInPage';
import User from './pages/userPage';
import Page404 from './Page404/Page404';






function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/sign-in' element={<SignIn />} />
                <Route path='/user' element={<User />} />
                {/* Route 404 - Doit être placée en dernier pour capturer toutes les routes non définies */}
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
