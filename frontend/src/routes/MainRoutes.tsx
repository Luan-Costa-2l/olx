import { useRoutes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SignIn } from '../pages/SignIn';

export const MainRoutes = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/about', element: <Home />},
        {path: '/signin', element: <SignIn />},
        {path: '/signup', element: <Home />},
        {path: '/ads/:id', element: <Home />},
        {path: '/my-account', element: <Home />},
        {path: '/post-an-ad', element: <Home />},
        {path: '/ads', element: <Home />},
        {path: '*', element: <NotFound />},
    ])
};