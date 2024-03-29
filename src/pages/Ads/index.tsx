import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { AdItem } from "../../components/AdItem";
import { PageContainer } from "../../components/MainComponents";
import OlxAPI from "../../helpers/OlxAPI";
import { AdType, CategoriesType, StatesType } from "../../types";
import { AdsBody } from "./styles";

let timer: number;

export const Ads = () => {
    const api = OlxAPI;
    const navigate = useNavigate();

    const useQueryString = () => {
        return new URLSearchParams( useLocation().search );
    }

    const query = useQueryString();

    const [stateList, setStateList] = useState<StatesType[]>([]);
    const [categories, setCategories] = useState<CategoriesType[]>([]);

    const [q, setQ] = useState( query.get('q') ?? '');
    const [state, setState] = useState( query.get('state') ?? '' );
    const [cat, setCat] = useState( query.get('cat') ?? '' );

    const [adList, setAdList] = useState<AdType[]>([]);
    const [adsTotal, setAdsTotal] = useState(0);
    const [pagesCount, setPagesCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultOpacity, setResultOpacity] = useState(1);
    const [loading, setLoading] = useState(true);

    const getAdList = async () => {
        let offset = (currentPage - 1) * 9;

        setLoading(true);
        const ads = await api.getAds({ sort: 'desc', limit: 9, q, cat, state, offset });
        setLoading(false);
        setAdList(ads.ads);
        setAdsTotal(ads.total);
        setResultOpacity(1);
    }

    useEffect(() => {
        const handleFetchs = async () => {
            const [sta, cats, ads] = await Promise.all([
                api.getStates(), 
                api.getCategories(),
                api.getAds({ sort: 'desc', limit: 9 })
            ]);
            setStateList(sta);
            setCategories(cats);
            setAdList(ads.ads);
        }
        handleFetchs();
    }, []);

    useEffect(() => {
        if (adList.length > 0) {
            setPagesCount(Math.ceil(adsTotal / adList.length));
        } else {
            setPagesCount(0);
        }
    }, [adsTotal]);

    useEffect(() => {
        setResultOpacity(0.3);
        getAdList();
    }, [currentPage]);

    useEffect(() => {
        let queryString: string[] = [];

        if (q) {
            queryString.push(`q=${q}`);
        }
        if (state) {
            queryString.push(`state=${state}`);
        }
        if (cat) {
            queryString.push(`cat=${cat}`);
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            navigate(`?${queryString.join('&')}`);
            getAdList();
        }, 1000);
        setResultOpacity(0.3);
        setCurrentPage(1);
    }, [q, state, cat]);

    let pagination = [];
    for (let i = 1; i <= pagesCount; i++) {
        pagination.push(i);
    }

    return (
        <PageContainer>
            <AdsBody>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="search" placeholder="O que você procura?" value={q} onChange={e => setQ(e.target.value)} />
                        <div className="filterName">Estado:</div>
                        <select name="states" value={state} onChange={e => setState(e.target.value)}>
                            <option value="">Todos</option>
                            {stateList.map((item, index) => (
                                <option key={index} value={item.name}>{item.name}</option>
                            ))}
                        </select>
                        <div className="filterName">Categoria:</div>
                        <ul>
                            {categories.map((item, index) => (
                                <li 
                                    key={index} 
                                    className={cat == item.slug ? 'categoryItem active' : 'categoryItem'} 
                                    onClick={() => setCat(item.slug)}
                                >
                                    <img src={item.img} alt={item.name} />
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </form>
                </div>
                <div className="rightSide">
                    <h2>Resultados</h2>
                    {loading && adList.length === 0 &&
                        <div className="listWarning">Carregando...</div>
                    }
                    {!loading && !adList.length &&
                        <div className="listWarning">Nenhum anúncio encontrado.</div>
                    }
                    <div className="gridArea" style={{opacity: resultOpacity}}>
                        {adList.map((item, index) => (
                            <AdItem key={index} item={item}/>
                        ))}
                    </div>

                    <div className="pagination">
                        {pagination.map((item, index) => (
                            <div onClick={() => setCurrentPage(item)} className={item === currentPage ? 'pagItem active' : 'pagItem'} key={index}>{item}</div>
                        ))}
                    </div>
                </div>
            </AdsBody>
        </PageContainer>
    )
}