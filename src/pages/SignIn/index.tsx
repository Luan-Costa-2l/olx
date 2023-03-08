import { FormEvent, useState } from 'react';
import { PageContainer, PageTitle, MessageError } from '../../components/MainComponents';
import * as C from './styles';
import OlxAPI from '../../helpers/OlxAPI';
import { doLogin } from '../../helpers/AuthHandler';

export const SignIn = () => {
    const api = OlxAPI;

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [rememberPasswordField, setRememberPasswordField] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDisabled(true);
        setError('');

        const json = await api.login(emailField, passwordField);

        if (json.error) {
            setError(json.error);
        } else {
            doLogin(json.token, rememberPasswordField);
            window.location.href = '/';
            console.log(json.token)
        }

        setDisabled(false);
    }

    return (
        <PageContainer>
            <C.PageArea>
                <PageTitle>fazer login</PageTitle>
                {error &&
                    <MessageError>
                        {error}
                    </MessageError>
                }
                <C.FormArea onSubmit={handlerSubmit}>
                    <div className="inputArea">
                        <label htmlFor='email' className='inputArea--label'>
                            E-mail:
                        </label>
                        <div className="inputArea--input">
                            <input type="email" id='email'value={emailField} onChange={e => setEmailField(e.target.value)} disabled={disabled} />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='password' className='inputArea--label'>
                            Senha:
                        </label>
                        <div className="inputArea--input">
                            <input type="password" id='password' value={passwordField} onChange={e => setPasswordField(e.target.value)} disabled={disabled} />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='checkbox' className='inputArea--label'>
                            Lembrar senha:
                        </label>
                        <div className="inputArea--input">
                            <input type="checkbox" id='checkbox' checked={rememberPasswordField} onChange={() => setRememberPasswordField(!rememberPasswordField)} disabled={disabled} />
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