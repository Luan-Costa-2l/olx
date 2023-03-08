import { useRoutes } from 'react-router-dom';
import { RequireAuth } from '../components/RequireAuth';
import { AddAd } from '../pages/AddAd';
import { AdPage } from '../pages/AdPage';
import { Ads } from '../pages/Ads';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/about', element: <Home />},
        {path: '/signin', element: <SignIn />},
        {path: '/signup', element: <SignUp />},
        {path: '/ads/:id', element: <AdPage />},
        {path: '/my-account', element: <RequireAuth><NotFound /></RequireAuth>},
        {path: '/post-an-ad', element: <AddAd />},
        {path: '/ads', element: <Ads />},
        {path: '*', element: <NotFound />},
    ])
};