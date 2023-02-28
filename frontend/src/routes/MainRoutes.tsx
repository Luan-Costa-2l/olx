import { useRoutes } from 'react-router-dom';
import { AddAd } from '../pages/AddAd';
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
        {path: '/ads/:id', element: <Home />},
        {path: '/my-account', element: <Home />},
        {path: '/post-an-ad', element: <AddAd />},
        {path: '/ads', element: <Home />},
        {path: '*', element: <NotFound />},
    ])
};