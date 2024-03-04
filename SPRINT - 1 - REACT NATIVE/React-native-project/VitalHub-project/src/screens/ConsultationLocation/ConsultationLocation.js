import { BoxInput } from "../../components/BoxInput/BoxInput"
import { Container, ContainerInput, ScrollProfile } from "../../components/Container/ContainerStyle"
import { LinkAccount, LinkLocation } from "../../components/Links/Links"
import { UserImage } from "../../components/Logo/LogoStyle"
import { SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"
import { LocationImage } from "./Styles"


export const ConsultationLocation = () => {

    return (

        <Container>

            <LocationImage
                source={require('../../assets/Localization.png')}
            />

            <TitleProfile>Clínica Natureh</TitleProfile>

            <SubtitleProfile>São Paulo, SP</SubtitleProfile>

            <BoxInput
                textLabel='Endereço'
                placeholder='Endereço...'
                keyType='text'
            />

            <ContainerInput>

                <BoxInput
                    textLabel='Número'
                    placeholder='Número'
                    keyType='numeric'
                    fieldWidth={45}
                    maxLength={8}
                />

                <BoxInput
                    textLabel='Bairro'
                    placeholder='Bairro...'
                    keyType='text'
                    fieldWidth={50}
                />


            </ContainerInput>


            <LinkLocation>Voltar</LinkLocation>


        </Container>
    )

}