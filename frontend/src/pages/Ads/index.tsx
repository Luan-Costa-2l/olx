import { PageContainer } from "../../components/MainComponents";
import { AdsBody } from "./styles";
export const Ads = () => {
    return (
        <PageContainer>
            <AdsBody>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="search" id="" placeholder="O que você procura?" />
                        <div className="filterName">Estado:</div>
                        <select name="states">
                            <option value="">Todos</option>
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