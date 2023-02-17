import { PageContainer, PageTitle } from '../../components/MainComponents';
import * as C from './styles';

export const SignIn = () => {
    return (
        <PageContainer>
            <C.PageArea>
                <PageTitle>fazer login</PageTitle>
                <C.FormArea>
                    <div className="inputArea">
                        <label htmlFor='email' className='inputArea--label'>
                            E-mail:
                        </label>
                        <div className="inputArea--input">
                            <input type="email" id='email' />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='password' className='inputArea--label'>
                            Senha:
                        </label>
                        <div className="inputArea--input">
                            <input type="password" id='password' />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='checkbox' className='inputArea--label'>
                            Lembrar senha:
                        </label>
                        <div className="inputArea--input">
                            <input type="checkbox" id='checkbox' />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='login' className='inputArea--label'></label>
                        <div className="inputArea--input">
                            <button>Fazer login</button>
                        </div>
                    </div>
                </C.FormArea>
            </C.PageArea>
        </PageContainer>
    )
}