import styled from "styled-components";

export const InputBox = styled.TextInput`
    border: 2px solid #49B3BA;
    align-items: left;
    justify-content: center;
    padding: 16px;
    border-radius: 5px;
    color: #34898F;
    font-size: 14px;
    font-family: MontserratAlternates_600SemiBold;
    width: 90%;
    margin-top: 15px;
    
`
export const InputCheckEmail = styled(InputBox)`
    width: 65px;
    height: 62px;
    border: 2px solid #77CACF;
    text-align: center;
    font-size: 40px;
    padding: 10px;
    font-family: Quicksand_600SemiBold;
`

export const InputProfileBox = styled.TextInput`
border: 1px solid #F5F3F3;
width: 90%;
align-items: left;
justify-content: center;
padding: 16px;
background-color: #F5F3F3;
color: #33303E;
font-size: 14px;
font-family: MontserratAlternates_500Medium;
border-radius: 5px;
margin-bottom: 20px;
`

export const InputBoxMedicalRecord = styled(InputBox)`

/* text-align: start; */
padding: 10px;
height: 121px;
margin-bottom: 20px;

`