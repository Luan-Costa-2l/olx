import { Link } from "react-router-dom";
import { formatPrice } from "../../helpers/formatPrice";
import { AdType } from "../../types"
import { AdBody } from "./styles";

type Props = {
    item: AdType;
}
export const AdItem = ({ item }: Props) => {
    return (
        <AdBody>
            <Link to={`/ads/${item.id}`}>
                <div className="adBody--image">
                    <img src={item.image} alt={`imagem de ${item.title}`} />  
                </div>
                <div className='adBody--title'>{item.title}</div>
                <div className="adBody--price">{item.priceNegotiable ? 'Preço Negociável' :formatPrice(item.price)}</div>
            </Link>
        </AdBody>
    )
}