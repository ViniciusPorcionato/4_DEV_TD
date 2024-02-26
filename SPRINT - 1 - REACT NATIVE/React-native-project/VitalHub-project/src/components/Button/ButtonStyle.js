import styled from "styled-components";

export const Button = styled.TouchableOpacity`
    width: 90%;
    height: 44px;
    border-radius: 5px;
    background-color: #496BBA;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border: 1px solid #496BBA;

`

export const ButtonProfile = styled(Button)`

margin-bottom: 50px;
height: 44px;

`

export const ButtonGoogle = styled(Button)`
    background-color: #FAFAFA;
    gap: 27px;
    flex-direction: row;
    margin-top: 15px;
`
export const ButtonModal = styled(Button)`
    width: 80%;
`
// export const ButtonSecondary = styled(Button)`
//     border: none;
//     background-color: transparent;
//     margin-bottom: 30px;
// `


export const SmallButton = styled.TouchableOpacity`
width: 30%;
height: 55px;
padding-top: 5px;
font-family: "MontserratAlternates_600SemiBold";
border: 2px solid  #60BFC5;
border-radius: 10px;
display: flex;
align-items:center;
`;
