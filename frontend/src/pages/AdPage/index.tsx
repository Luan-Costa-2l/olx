import { PageContainer, PageTitle } from "../../components/MainComponents"
import { AdPageBody, Form } from "./styles"
import OlxAPI from "../../helpers/OlxAPI"
import { CategoriesType } from "../../types"

export const AdPage = () => {
    const api = OlxAPI;

    const [categoryList, setCategoryList] = useState<CategoriesType[]>([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const cats = await api.getCategories();
            setCategoryList(cats);
        }
        fetchCategory();
    }, []);
    return (
        <PageContainer>
            <AdPageBody>
                <PageTitle>Postar anúncio</PageTitle>
                <Form>
                    <div className="inputArea">
                        <label htmlFor="title" className="inputArea--label">
                            Titulo:
                        </label>
                        <div className="inputArea--input">
                            <input type="text" name="title" id="title" />
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="category" className="inputArea--label">
                            Categoria:
                        </label>
                        <div className="inputArea--input">
                            <select name="category" id="category">
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
                            <input type="text" name="price" id="price" />
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="negotiable" className="inputArea--label">
                            Preço negociável:
                        </label>
                        <div className="inputArea--input">
                            <input type="checkbox" name="negotiable" id="negotiable" />
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="description" className="inputArea--label">
                            Descrição:
                        </label>
                        <div className="inputArea--input">
                            <textarea name="description" id="description"></textarea>
                        </div>
                    </div>

                    <div className="inputArea">
                        <label htmlFor="image" className="inputArea--label">
                            Imagens (1 ou mais):
                        </label>
                        <div className="inputArea--input">
                            <input type="file" name="image" id="image" multiple />
                        </div>
                    </div>
                    
                    <div className="inputArea">
                        <label htmlFor="image" className="inputArea--label"></label>
                        <div className="inputArea--input">
                            <button>Adicionar Anúncio</button>
                        </div>
                    </div>
                </Form>
            </AdPageBody>
        </PageContainer>
    )
}