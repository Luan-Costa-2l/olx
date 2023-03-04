import styled from "styled-components";

export const AdsBody = styled.div`
    margin-top: 20px;
    display: flex;

    .leftSide {
        max-width: 200px;
        margin-right: 10px;

        .filterName {
            margin: 10px 0 5px 0;
            font-size: 15px;
        }

        input, select {
            width: 100%;
            height: 40px;
            padding-left: 10px;
            outline: 0;
            border: 2px solid #9BB83C;
            border-radius: 5px;
            font-size: 15px;
        }

        ul, li {
            margin: 0;
            padding: 0;
            list-style-type: none;
        }
    }

    .rightSide {
        flex: 1;
    }
`;