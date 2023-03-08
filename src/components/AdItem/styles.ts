import styled from "styled-components";

export const AdBody = styled.div`
    background-color: #FFF;
    border: 1px solid #CCC;
    border-radius: 5px;

    a {
        text-decoration: none;
        color: #000;
        display: block;
        width: 100%;
        height: 100%;
        padding: 10px;

        img {
            width: 100%;
            border-radius: 5px;
        }

        .adBody--title {
            font-weight: bold;
            margin-bottom: 5px;
        }

        .adBody--price {
            color: #555;
        }

        &:hover {
            background-color: #EEE;
        }
    }    
`