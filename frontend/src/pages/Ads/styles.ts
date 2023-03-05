import styled from "styled-components";

export const AdsBody = styled.div`
    margin-top: 20px;
    display: flex;

    .leftSide {
        max-width: 200px;
        margin-right: 20px;

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

        .categoryItem {
            display: flex;
            align-items: center;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
            transition: all .1s ease;

            &:hover, &.active {
                color: #FFF;
                background-color: #9BB83C;
            }

            img {
                width: 30px;
                height: 30px;
                margin-right: 5px;
            }

            span {
                font-size: 14px;
            }
        }
    }

    .rightSide {
        flex: 1;

        h2 {
            margin-top: 0;
        }

        .gridArea {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
    }
`;