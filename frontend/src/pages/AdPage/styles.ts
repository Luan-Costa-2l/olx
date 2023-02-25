import styled from "styled-components";

export const AdPageBody = styled.div`
    min-height: calc(100vh - 120px);
`;

export const Form = styled.form`
    padding: 10px;
    background-color: #FFF;
    box-shadow: 0px 0px 3px #999;
    border-radius: 7px;

    .inputArea {
        display: flex;
        align-items: center;
        max-width: 512px;
        padding: 10px;

        .inputArea--label {
            width: 200px;
            text-align: right;
            padding-right: 20px;
            font-weight: bold;
            font-size: 14px;
        }

        .inputArea--input {
            flex: 1;

            input, select, textarea {
                width: 100%;
                padding: 5px;
                font-size: 14px;
                border: 1px solid #CCC;
                border-radius: 3px;
                outline: 0;
                transition: all .5s ease;

                &:focus {
                    border: 1px solid #000;
                }
            }

            input[type=checkbox] {
                width: auto;
            }

            textarea {
                height: 150px;
                resize: none;
            }

            button {
                padding: 5px 10px;
                background-color: #0089FF;
                color: #FFF;
                font-size: 14px;
                border: 0;
                border-radius: 3px;
                font-weight: bold;
            }
        }
    }
`;