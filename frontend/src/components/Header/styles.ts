import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;
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