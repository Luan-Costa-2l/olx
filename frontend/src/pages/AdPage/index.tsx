import { FormEvent, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { MessageError, PageContainer, PageTitle } from "../../components/MainComponents"
import { AdPageBody, Form } from "./styles"
import OlxAPI from "../../helpers/OlxAPI"
import { CategoriesType } from "../../types"
import MaskedInput from 'react-text-mask'
import { createNumberMask } from "text-mask-addons"

export const AdPage = () => {
    const api = OlxAPI;
    const navigate = useNavigate();
    const fileField = useRef<HTMLInputElement>(null);

    const [categoryList, setCategoryList] = useState<CategoriesType[]>([]);

    const [titleField, setTitleField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [priceField, setPriceField] = useState('');
    const [priceNegotiableField, setPriceNegotiableField] = useState(false);
    const [descriptionField, setDescriptionField] = useState('');

    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchCategory = async () => {
            const cats = await api.getCategories();
            setCategoryList(cats);
        }
        fetchCategory();
    }, []);

    const handlerSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setDisabled(true);
        let errors = [];

        if (!titleField) {
            errors.push('Sem título.');
        }
        if (!categoryField) {
            errors.push('Sem categoria.');
        }

        if (errors.length === 0) {
            const fData = new FormData();
            fData.append('title', titleField);
            fData.append('price', priceField);
            fData.append('priceneg', priceNegotiableField.toString());
            fData.append('desc', descriptionField);
            fData.append('cat', categoryField);

            if (fileField) {
                if (fileField.current?.files?.length) {
                    for (let i = 0; i < fileField.current?.files?.length; i++) {
                        fData.append('img', fileField.current?.files[i]);
                    }
                }
            }
            const json = await api.addAd(fData);

            if (!json.error) {
                navigate(`/ad/${json.id}`);
                return;
            } else {
                setError(json.error);
            }
        } else {
            alert(errors.join('\n'));
        }
        setDisabled(false);
    }

    const numberMask = createNumberMask({
        prefix: 'R$ ',
        includeThousandsSeparator: true,
        thousandsSeparatorSymbol: '.',
        allowDecimal: true,
        decimalSymbol: ',',
    });

    return (
        <PageContainer>
            <AdPageBody>
                <PageTitle>Postar anúncio</PageTitle>
                <Form onSubmit={handlerSubmit}>
                    {error &&
                        <MessageError>
                            {error}
                        </MessageError>
                    }
                    <div className="inputArea">
                        <label htmlFor="title" className="inputArea--label">
                            Titulo:
                        </label>
                        <div className="inputArea--input">
                            <input type="text" name="title" id="title" disabled={disabled} value={titleField} onChange={e => setTitleField(e.target.value)} />
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="category" className="inputArea--label">
                            Categoria:
                        </label>
                        <div className="inputArea--input">
                            <select name="category" id="category" disabled={disabled} value={categoryField} onChange={e => setCategoryField(e.target.value)}>
                                <option value=""></option>
                                {categoryList.map((item, index) => (
                                    <option key={index} value={item.slug}>{item.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="price" className="inputArea--label">
                            Preço:
                        </label>
                        <div className="inputArea--input">
                            <MaskedInput 
                                mask={numberMask} 
                                placeholder="R$ " 
                                disabled={disabled || priceNegotiableField} 
                                value={priceField} 
                                onChange={e => setPriceField(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="negotiable" className="inputArea--label">
                            Preço negociável:
                        </label>
                        <div className="inputArea--input">
                            <input type="checkbox" name="negotiable" id="negotiable" checked={priceNegotiableField} disabled={disabled} onChange={e => setPriceNegotiableField(!priceNegotiableField)} />
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="description" className="inputArea--label">
                            Descrição:
                        </label>
                        <div className="inputArea--input">
                            <textarea name="description" id="description" disabled={disabled} value={descriptionField} onChange={e => setDescriptionField(e.target.value)}></textarea>
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="image" className="inputArea--label">
                            Imagens (1 ou mais):
                        </label>
                        <div className="inputArea--input">
                            <input type="file" name="image" id="image" disabled={disabled} ref={fileField} multiple />
                        </div>
                    </div>
                    
                    <div className="inputArea">
                        <label htmlFor="image" className="inputArea--label"></label>
                        <div className="inputArea--input">
                            <button disabled={disabled}>Adicionar Anúncio</button>
                        </div>
                    </div>
                </Form>
            </AdPageBody>
        </PageContainer>
    )
}