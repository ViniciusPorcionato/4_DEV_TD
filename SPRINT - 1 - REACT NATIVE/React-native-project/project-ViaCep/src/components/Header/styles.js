import styled from "styled-components";

export const HeaderContainer = styled.View`
    background-color: #008B8B;
    border-radius: 0px 0px 25px 25px;
    height: 20%;
    justify-content: center;
    align-items: center;
    /* elevation: 30; */
    shadow-color: black;
    shadow-opacity: 0.26;
    shadow-offset: 2px 2px;
    shadow-radius: 10px;
    elevation: 30;

`

export const HeaderContent = styled.SafeAreaView`
    margin-top: 30px;
`

export const TextHeader = styled.Text`
    font-size: 24px;
    font-family: Roboto_500Medium;
    color: #f1f1f1;
`
