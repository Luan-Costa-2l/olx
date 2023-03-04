import { useState, useEffect } from "react"
import { PageContainer } from "../../components/MainComponents";
import OlxAPI from "../../helpers/OlxAPI";
import { CategoriesType, StatesType } from "../../types";
import { AdsBody } from "./styles";
export const Ads = () => {
    const api = OlxAPI;

    const [states, setStates] = useState<StatesType[]>([]);
    const [categories, setCategories] = useState<CategoriesType[]>([]);

    useEffect(() => {
        const handleFetchs = async () => {
            const [sta, cats] = await Promise.all([
                api.getStates(), 
                api.getCategories()
            ]);
            setStates(sta);
            setCategories(cats);
        }
        handleFetchs();
    }, []);


    return (
        <PageContainer>
            <AdsBody>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="search" id="" placeholder="O que você procura?" />
                        <div className="filterName">Estado:</div>
                        <select name="states">
                            <option value="">Todos</option>
                            {states.map((item, index) => (
                                <option key={index} value={item._id}>{item.name}</option>
                            ))}
                        </select>
                        <div className="filterName">Categoria:</div>
                        <ul>
                            {categories.map((item, index) => (
                                <li key={index} className="categoryItem">
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