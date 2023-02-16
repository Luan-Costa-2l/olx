import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;

    ul {
        display: flex;
        padding: 0;

        li {
            list-style: none;
            margin-right: 40px;

            &:last-child {
                margin-right: 0;
            }

            a, button {
                border: 0;
                outline: 0;
                font-size: 16px;
                color: #000;
                text-decoration: none;
                background-color: #FFF;
                cursor: pointer;

                &.button {
                    padding: 5px 10px;
                    color: #FFF;
                    border-radius: 7px;
                    background-color: #FF8100;
                }
                &.button:hover {
                    color: #FFF;
                    background-color: #E57706;
                }
            }
            a, button {
                &:hover {
                    color: #999;
                }
            }
        }
    }    
`;

export const Logo = styled.div`
    flex: 1;
    font-size: 27px;
    font-weight: 700;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;

        .logo-1 { color: #F00; }
        .logo-2 {
            color: #0F0;
            margin-bottom: 5px;
        }
        .logo-3 { color: #00F; }
    }
`;