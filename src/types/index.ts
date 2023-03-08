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

export interface ItemType {
    category: CategoriesType;
    dateCreated: string;
    description: string;
    id: string;
    images: string[];
    others: null | boolean;
    price: number;
    priceNegotiable: boolean;
    stateName: string;
    title: string;
    userInfo: { name: string, email: string };
    views: number;
}