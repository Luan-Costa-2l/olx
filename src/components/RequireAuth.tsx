import { Navigate } from "react-router-dom";
import { isLogged } from "../helpers/AuthHandler"

interface Props {
    children: JSX.Element
}

export const RequireAuth = ({ children }: Props) => {
    const logged = isLogged();
    return logged ? children : <Navigate to="/" />;
}