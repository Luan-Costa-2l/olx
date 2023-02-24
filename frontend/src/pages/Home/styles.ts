import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: #DDD;
    padding: 20px 0 40px 0;
`;

export const SearchBox = styled.div`
    border-radius: 7px;
    background-color: #9BB83C;
    padding: 20px 15px;
`;

export const Form = styled.form`
    display: flex;
    
    input {
        flex: 1;
        height: 40px;
        padding: 10px;
        margin-right: 20px;
        border: 0;
        outline: 0;
        font-size: 15px;
        border-radius: 7px;
    }

    select {
        width: 100px;
        border: 0;
        outline: 0;
        margin-right: 20px;
        border-radius: 7px;
    }

    button {
        padding: 0px 20px;
        background-color: #49AEEF;
        border: 0;
        outline: 0;
        color: #FFF;
        border-radius: 7px;
        font-size: 15px;
        cursor: pointer;

        &:hover {
            background-color: #006FCE;
        }
    }
`;

export const CategoryList = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CategoryItem = styled.div`
    margin-top: 20px;
    text-align: center;
    cursor: pointer;

    a {
        color: #000;
        text-decoration: none;
        display: block;

        p {
            margin: 5px 0 0 0;
        }
    }

    &:hover {
        color: #999;
    }
`;

export const PageArea = styled.main`
    
    .seeAllAds {
        text-decoration: none;
        display: inline-block;
        margin-top: 15px;
        color: #000;
        font-weight: bold;

        &:hover {
            color: #333;
        }
    }
`;

export const AdsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;