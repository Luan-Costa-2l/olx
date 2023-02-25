import { Link } from 'react-router-dom';
import { isLogged, doLogout } from '../../helpers/AuthHandler';
import * as C from './styles';

export const Header = () => {
    let logged = isLogged();

    const handlerLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    return (
        <C.HeaderArea>
            <div className='container'>
                <C.Logo>
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">X</span>
                    </Link>
                </C.Logo>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <button onClick={handlerLogout}>Sair</button>    
                                </li>
                                <li>
                                    <Link to="/post-an-ad" className='button'>Postar um anúncio</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>    
                                </li>
                                <li>
                                    <Link to="/signin" className='button'>Postar um anúncio</Link>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </C.HeaderArea>
    )
}