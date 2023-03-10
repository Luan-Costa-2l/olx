import styled from "styled-components";

export const SearchArea = styled.div`
    background-color: #DDD;
    padding: 20px 0 40px 0;

    @media (max-width: 1030px) {
        padding: 20px;
    }
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
        height: 40px;
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

    @media (max-width: 600px) {
        flex-direction: column;

        input, select {
            margin: 0;
            margin-bottom: 10px;
        }

        select {
            height: 40px;
            width: 100%;
        }
    }
`;

export const CategoryList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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

    @media (max-width: 600px) {
        width: 50%;
    }
`;

export const PageArea = styled.main`
    min-height: calc(100vh - 380px);
    
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

    @media (max-width: 1030px) {
        padding: 0 20px;
    }
`;

export const AdsArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    
    @media (max-width: 880px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;