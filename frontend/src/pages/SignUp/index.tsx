import { FormEvent, useState } from 'react';
import { PageContainer, PageTitle, MessageError } from '../../components/MainComponents';
import * as C from './styles';
import OlxAPI from '../../helpers/OlxAPI';

type StateListType = {
    _id: string;
    name: string;
}

export const SignUp = () => {
    const api = OlxAPI;

    const [nameField, setNameField] = useState('');
    const [stateField, setStateField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [confirmPasswordField, setConfirmPasswordField] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');
    const [stateList, setStateList] = useState<StateListType[]>([]);

    useEffect(() => {
        const getStates = async () => {
            const response = await api.getStates();
            setStateList(response);
        }
        getStates();
    }, []);

    const handlerSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setDisabled(true);
        setError('');
        setDisabled(false);
    }

    return (
        <PageContainer>
            <C.PageArea>
                <PageTitle>Cadastro</PageTitle>
                {error &&
                    <MessageError>
                        {error}
                    </MessageError>
                }
                <C.FormArea onSubmit={handlerSubmit}>
                    <div className="inputArea">
                        <label htmlFor='name' className='inputArea--label'>
                            Nome Completo:
                        </label>
                        <div className="inputArea--input">
                            <input type="text" id='name'value={nameField} onChange={e => setNameField(e.target.value)} disabled={disabled} />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='state' className='inputArea--label'>
                            Estado:
                        </label>
                        <div className="inputArea--input">
                            <select id="state" value={stateField} onChange={e => setStateField(e.target.value)}>
                                <option></option>
                                {stateList.map((item, index) => (
                                    <option key={index} value={item._id}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>
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
                        <label htmlFor='RememberPassword' className='inputArea--label'>
                            Confirmar Senha:
                        </label>
                        <div className="inputArea--input">
                            <input type="password" id='RememberPassword' value={confirmPasswordField} onChange={e => setConfirmPasswordField(e.target.value)} disabled={disabled} />
                        </div>
                    </div>
                    <div className="inputArea">
                        <label htmlFor='login' className='inputArea--label'></label>
                        <div className="inputArea--input">
                            <button>Fazer cadastro</button>
                        </div>
                    </div>
                </C.FormArea>
            </C.PageArea>
        </PageContainer>
    )
}