import { useState } from "react"
import { useParams } from "react-router-dom"
import OlxAPI from "../../helpers/OlxAPI"
import { PageContainer } from "../../components/MainComponents"

import { AdPageArea, Fake } from "./styles"
import { ItemType } from "../../types"

export const AdPage = () => {
    const api = OlxAPI;
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState<ItemType>();

    return (
        <PageContainer>
            <AdPageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={320} />}
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={30} />}
                            </div>
                            <div className="description">
                                {loading && <Fake height={100} />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake />}
                    </div>
                    <div className="box box--padding">
                        {loading && <Fake height={50} />}
                    </div>
                </div>
            </AdPageArea>
        </PageContainer>
    )
}