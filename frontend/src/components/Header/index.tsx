import { Link } from 'react-router-dom';
import { PageContainer } from '../MainComponents';
import * as C from './styles';

export const Header = () => {
    let logged = false; // exemple

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
            </C.Container>
        </PageContainer>
    )
}