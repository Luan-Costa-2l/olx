import { useEffect, useState } from 'react';
import { PageContainer } from '../../components/MainComponents';
import OlxAPI from '../../helpers/OlxAPI';
import { StatesType } from '../../types';
import * as C from './styles';

export const Home = () => {
    const api = OlxAPI;

    const [states, setStates] = useState<StatesType[]>([]);

    useEffect(() => {
        const fetchStates = async () => {
            let response = await api.getStates();
            setStates(response);
        }
        fetchStates();
    }, []);

    return (
        <>
            <C.SearchArea>
                <PageContainer>
                    <C.SearchBox>
                        <C.Form action="/ads" method='get'>
                            <input type="text" name="q" placeholder='O que você procura?' />
                            <select name="state">
                                {states.map((item, index) => (
                                    <option key={index} value={item.name}>{item.name}</option>
                                ))}
                            </select>
                            <button>Pesquisar</button>
                        </C.Form>
                    </C.SearchBox>
                </PageContainer>
            </C.SearchArea>
        </>
    )
}