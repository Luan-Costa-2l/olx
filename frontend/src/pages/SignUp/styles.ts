import styled from "styled-components";

export const PageArea = styled.div`
    min-height: calc(100vh - 120px);
`;

export const FormArea = styled.form`
    background-color: #FFF;
    padding: 10px;
    box-shadow: 0px 0px 3px #999;
    border-radius: 10px;

    .inputArea {
        padding: 10px;
        display: flex;
        align-items: center;
        max-width: 512px;

        .inputArea--label {
            width: 200px;
            padding-right: 20px;
            display: inline-block;
            text-align: right;
            font-weight: bold;
            font-size: 14px;
        }

        .inputArea--input {
            flex: 1;

            input {
                width: 100%;
                padding: 5px;
                outline: 0;
                border: 1px solid #CCC;
                border-radius: 3px;
                font-size: 14px;
                transition: all .5s ease;

                &:focus {
                    border: 1px solid #000;
                }
            }
            input[type=checkbox] {
                width: auto;
                cursor: pointer;
            }

            button {
                padding: 5px 10px;
                color: #FFF;
                border: 0;
                border-radius: 3px;
                outline: 0;
                background-color: #0089FF;
                font-weight: bold;
                cursor: pointer;

                &:hover {
                    background-color: #006FCE;
                }
            }
        }
        
    }
`;