import styled from "styled-components";
import {LinearGradient} from "expo-linear-gradient";


export const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #fafafa;
`

export const ContentAccount = styled.SafeAreaView`
    width: 100%;
    gap: 5px;
    flex-direction: row;
    justify-content: center;
    margin-top: 30px;
`

export const ConteinerIcon = styled.SafeAreaView`
    width: 90%;
    justify-content: left;
    padding-top: 10px;
`

export const ContainerInputEmail = styled.SafeAreaView`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

export const ScrollProfile = styled.ScrollView`
    height: 80%;

`

export const ContainerInput = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

export const ContainerMedicalRecord = styled.View`
flex-direction: row;
justify-content: space-around;
`

export const ContainerHeader = styled(LinearGradient).attrs({
    colors: ["#60BFC5", "#496BBA"],
    start: {x: -0.05, y: 1.08 },
    end: {x: 1, y: 0}
})`

width: 100%;
padding: 20px 20px 22px 20px;

border-radius: 0px 0px 15px 15px;
box-shadow: 0px 4px 15px #00000014;

flex-direction: row;
align-items: center;
justify-content: space-evenly;


`