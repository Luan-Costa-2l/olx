import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import OlxAPI from "../../helpers/OlxAPI"
import { PageContainer } from "../../components/MainComponents"

import { AdPageArea, BreadChumb, Fake } from "./styles"
import { ItemType } from "../../types"

import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import { formatPrice } from "../../helpers/formatPrice"

export const AdPage = () => {
    const api = OlxAPI;
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState<ItemType | null>(null);

    useEffect(() => {
        const fetchAd = async (id: string | undefined) => {
            if (id) {
                const ad = await api.getAd(id, true);
                setLoading(false);
                setAdInfo(ad);
            } else {
                alert("Erro, tente novamente.");
            }
        }
        fetchAd(id);
    }, [id]);

    const formatDate = (date: string) => {
        let fullDate = new Date(date);
        let day = fullDate.getDate();
        let month = fullDate.getMonth();
        let year = fullDate.getFullYear();
        let arrayMonths = [ 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        return `${day} de ${arrayMonths[month]} de ${year}`;
    }

    return (
        <PageContainer>
            {adInfo &&
                <BreadChumb>
                    Você está aqui: 
                    <Link to={`/`}>Home</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}`}>{adInfo.stateName}</Link>
                    /
                    <Link to={`/ads?state=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>
                    /
                    {adInfo.title}
                </BreadChumb>
            }
            <AdPageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="adImage">
                            {loading && <Fake height={320} />}
                            {!loading && adInfo &&
                                <Slide>
                                    {adInfo.images.map((item, index) => (
                                        <div key={index} className="each-slide">
                                            <img src={item} alt="" />
                                        </div>
                                    ))}
                                </Slide>
                            }
                        </div>
                        <div className="adInfo">
                            <div className="adName">
                                {loading && <Fake height={30} />}
                                {!loading && adInfo &&
                                    <>
                                        <h2>{adInfo.title}</h2>
                                        <small className="dateCreated">
                                            Criado em {formatDate(adInfo.dateCreated)}
                                        </small>
                                    </>
                                }
                            </div>
                            <div className="description">
                                {loading && <Fake height={100} />}
                                {!loading && adInfo &&
                                    <>
                                        {adInfo.description}
                                        <hr />
                                        <small>Visualizações: {adInfo.views}</small>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box--padding">
                        {loading && <Fake />}
                        {!loading && adInfo &&
                            <div className="price">
                                Preço:
                                <span>{formatPrice(adInfo.price)}</span>
                            </div>
                        }
                    </div>
                    <a href="mailto:exemple@gmail.com" target="_blank" className="contactSellerLink">Fale com o Vendedor</a>
                    <div className="box box--padding">
                        {loading && <Fake height={50} />}
                        {!loading && adInfo &&
                            <address className="contact">
                                <b>{adInfo.userInfo.name}</b>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </address>
                        }
                    </div>
                </div>
            </AdPageArea>
        </PageContainer>
    )
}