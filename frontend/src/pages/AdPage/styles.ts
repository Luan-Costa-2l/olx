import styled from "styled-components";

export const Fake = styled.div<{height?: number}>`
    background-color: #DDD;
    height: ${props => props.height ?? 20}px;
`;

export const AdPageArea = styled.div`
    display: flex;
    margin-top: 20px;

    .box {
        background-color: #FFF;
        box-shadow: 0px 0px 4px #999;
        border-radius: 7px;
        margin-bottom: 20px;

        &.box--padding {
            padding: 10px;
        }
    }

    .leftSide {
        flex: 1;
        margin-right: 20px;

        .box {
            display: flex;
        }

        .adImage {
            width: 320px;
            height: 320px;

            .each-slide {
                height: 320px;
                
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .adInfo {
            flex: 1;
            padding: 20px;

            .adName {
                margin-bottom: 20px;

                h2 {
                    margin: 0;
                }
                
                small {
                    color: #999;
                }
            }

            .adDescription {

            }
        }
    }

    .rightSide {
        width: 250px;
    }
`;