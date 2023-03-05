import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import { PageContainer } from "../../components/MainComponents";
import OlxAPI from "../../helpers/OlxAPI";
import { CategoriesType, StatesType } from "../../types";
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

    useEffect(() => {
        const handleFetchs = async () => {
            const [sta, cats] = await Promise.all([
                api.getStates(), 
                api.getCategories()
            ]);
            setStateList(sta);
            setCategories(cats);
        }
        handleFetchs();
    }, []);

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

        timer = setTimeout(() => { navigate(`?${queryString.join('&')}`); }, 500);
        
    }, [q, state, cat]);


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
                    ...
                </div>
            </AdsBody>
        </PageContainer>
    )
}