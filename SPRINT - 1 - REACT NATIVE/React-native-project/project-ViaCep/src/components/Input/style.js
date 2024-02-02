import styled, { css } from "styled-components";

export const InputBox = styled.TextInput`
    border: 2px solid #a1a1a1;
    align-items: left;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
    font-size: 18px;
    font-family: Roboto_500Medium;

    ${props => !props.editable && css`
        background-color: #f6f6f6;
    `}
`