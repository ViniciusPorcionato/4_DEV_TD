import { StatusBar } from "react-native"
import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Button, ButtonProfile } from "../../components/Button/ButtonStyle"
import { Container, ContainerInput, ScrollProfile } from "../../components/Container/ContainerStyle"
import { UserImage } from "../../components/Logo/LogoStyle"
import { ButtonTitle, SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"


export const UserProfile = () => {
    return(
        <ScrollProfile>
            <Container>

            <UserImage 
                source={require('../../assets/ProfileImage.png')}
            />

            <TitleProfile>Richard Kosta</TitleProfile>

            <SubtitleProfile>richard.kosta@gmail.com</SubtitleProfile>

            <BoxInput
            textLabel='Data de Nascimento'
            placeholder='dd/mm/aaaa'
            keyType='numeric'
            maxLength={8}
            />

            <BoxInput
            textLabel='CPF'
            placeholder='*********-**'
            keyType='numeric'
            maxLength={11}
            />

            <BoxInput
            textLabel='Endereço'
            placeholder='Endereço...'
            keyType='text'
            />

            <ContainerInput>

            <BoxInput
            textLabel='Cep'
            placeholder='00000-000'
            keyType='numeric'
            fieldWidth={45}
            maxLength={8}
            /> 

            <BoxInput
            textLabel='Cidade'
            placeholder='Cidade...'
            keyType='text'
            fieldWidth={50}
            />

            </ContainerInput>


            <Button>
                <ButtonTitle>Salvar</ButtonTitle>
            </Button>

            <ButtonProfile>
                <ButtonTitle>Editar</ButtonTitle>
            </ButtonProfile>

            <StatusBar barStyle='dark-content' translucent backgroundColor='transparent'/>

            </Container>
        </ScrollProfile>
    )
}