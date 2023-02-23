import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageContainer } from '../../components/MainComponents';
import OlxAPI from '../../helpers/OlxAPI';
import { CategoriesType, StatesType } from '../../types';
import * as C from './styles';

export const Home = () => {
    const api = OlxAPI;

    const [states, setStates] = useState<StatesType[]>([]);
    const [categories, setCategories] = useState<CategoriesType[]>([]);

    useEffect(() => {
        const fetchStates = async () => {
            let response = await api.getStates();
            setStates(response);
        }
        fetchStates();
    }, []);

    useEffect(() => {
        const fetchCategory = async () => {
            let cat = await api.getCategories();
            setCategories(cat);
        }
        fetchCategory();
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
                    <C.CategoryList>
                        {categories.map((item, index) => (
                            <C.CategoryItem key={index}>
                                <Link to={`/ads?cat=${item.slug}`}>
                                    <img src={item.img} alt={`${item.slug} category`} />
                                    <p>{item.name}</p>
                                </Link>
                            </C.CategoryItem>
                        ))}
                    </C.CategoryList>
                </PageContainer>
            </C.SearchArea>
        </>
    )
}