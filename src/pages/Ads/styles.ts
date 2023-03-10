import styled from "styled-components";

export const AdsBody = styled.div`
    padding: 20px 0;
    display: flex;
    min-height: calc(100vh - 121px);

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

        .listWarning {
            font-size: 20px;
            text-align: center;
            margin-top: 30px;
        }

        .gridArea {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }

        .pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;

            .pagItem {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 30px;
                height: 30px;
                border: 1px solid #000;
                font-size: 14px;
                cursor: pointer;

                &:hover, &.active {
                    background-color: #CCC;
                    border-color: #999;
                }
            }
        }
    }

    @media (max-width: 1030px) {
        padding: 20px;
    }

    @media (max-width: 880px) {

        .rightSide {

            .gridArea {
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;

        .leftSide {
            max-width: 100%;
            margin: 0;
            margin-bottom: 20px;

            ul {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;

                .categoryItem {
                    width: 50%;
                    flex-direction: column;

                    img {
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }
`;