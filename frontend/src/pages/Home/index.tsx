import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AdItem } from '../../components/AdItem';
import { PageContainer, PageTitle } from '../../components/MainComponents';
import { formatPrice } from '../../helpers/formatPrice';
import OlxAPI from '../../helpers/OlxAPI';
import { AdType, CategoriesType, StatesType } from '../../types';
import * as C from './styles';

export const Home = () => {
    const api = OlxAPI;

    const [states, setStates] = useState<StatesType[]>([]);
    const [categories, setCategories] = useState<CategoriesType[]>([]);
    const [adsList, setAdsList] = useState<AdType[]>([]);

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

    useEffect(() => {
        const fetchRecentAds = async () => {
            let json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdsList(json.ads);
        }
        fetchRecentAds();
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
            <PageContainer>
                <C.PageArea>
                    <PageTitle>Anúncios recentes</PageTitle>
                    <C.AdsArea>
                        {adsList.map((item, index) => (
                            <AdItem key={index} item={item} />
                        ))}
                    </C.AdsArea>
                    <Link to={`/ads`} className="seeAllAds">Ver Todos</Link>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit optio, a vero sunt itaque tempore voluptatem necessitatibus, tenetur delectus expedita vel temporibus alias officia ipsum odio accusamus quia soluta officiis?</p>
                </C.PageArea>
            </PageContainer>
        </>
    )
}