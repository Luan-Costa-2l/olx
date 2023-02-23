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