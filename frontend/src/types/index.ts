export type StatesType = {
    _id: string;
    name: string;
}

export type CategoriesType = {
    img: string;
    name: string;
    slug: string;
    _id: string;
}

export type AdType = {
    id: string;
    image: string;
    price: number;
    priceNegotiable: boolean;
    title: string;
}