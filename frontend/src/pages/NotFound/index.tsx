import { Link } from "react-router-dom"
import { NotFoundArea } from "./styles"

export const NotFound = () => {
    return (
        <NotFoundArea>
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar para Página principal</Link>
        </NotFoundArea>
    )
}