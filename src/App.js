import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Switch, useLocation } from 'react-router-dom';
import NewAd from './pages/NewAdPage';
import RegisterPage from './pages/RegisterPage';
import AllAdsPage from './pages/AllAdsPage';
import LoginPage from './pages/LoginPage';
import ViewAdPage from './pages/ViewAdPage';
import ProfilePage from './pages/ProfilePage';
import '../src/scss/home_page.css';

function App() {
    const location = useLocation();

    return (
        <div className='App'>
            <Switch location={location} key={location.pathname}>
                <Route path='/' exact>
                    <HomePage />
                </Route>
                <Route path='/new-ad' exact>
                    <NewAd />
                </Route>
                <Route path='/register' exact>
                    <RegisterPage />
                </Route>
                <Route path='/login' exact>
                    <LoginPage />
                </Route>
                <Route path='/all-ads' exact>
                    <AllAdsPage />
                </Route>
                <Route path='/my-profile' exact>
                    <ProfilePage />
                </Route>
                <Route path='/view-ad-page/:id' exact>
                    <ViewAdPage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
