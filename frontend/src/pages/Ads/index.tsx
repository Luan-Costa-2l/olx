import { useState, useEffect } from "react"
import { PageContainer } from "../../components/MainComponents";
import OlxAPI from "../../helpers/OlxAPI";
import { StatesType } from "../../types";
import { AdsBody } from "./styles";
export const Ads = () => {
    const api = OlxAPI;

    const [states, setStates] = useState<StatesType[]>([]);

    useEffect(() => {
        const fetchStates = async () => {
            const sta = await api.getStates();
            setStates(sta);
        }
        fetchStates();
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
                            <li>exemple</li>
                            <li>exemple</li>
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