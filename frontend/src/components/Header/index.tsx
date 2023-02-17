import { Link } from 'react-router-dom';
import { isLogged } from '../../helpers/AuthHandler';
import { PageContainer } from '../MainComponents';
import * as C from './styles';

export const Header = () => {
    let logged = isLogged();

    return (
        <PageContainer>
            <C.Container>
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
                                    <button>Sair</button>    
                                </li>
                                <li>
                                    <Link to="/add-an-ad" className='button'>Postar um anúncio</Link>
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
            </C.Container>
        </PageContainer>
    )
}