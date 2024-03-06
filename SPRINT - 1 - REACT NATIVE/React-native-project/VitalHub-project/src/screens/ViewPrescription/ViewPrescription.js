import { BoxInputPrescriptionView, BoxInputViewPrescription } from "../../components/BoxInput/BoxInput"
import { ButtonCanceled, ButtonSendPrescription } from "../../components/Button/Button"
import { Container, ContainerViewPrescriptiion, ContainerViewPrescriptionButton, ScrollViewPrescriptiion } from "../../components/Container/ContainerStyle"
import { LinkBack } from "../../components/Links/Links"
import { ViewPrescriptiionImage } from "../../components/Logo/LogoStyle"
import { SubtitleViewPrescription, TitleViewPrescriptiion } from "../../components/Title/TitleStyle"
import { Line } from "./Styles"

export const ViewPrescription = ({navigation}) => {
    return (
        <ScrollViewPrescriptiion>

            <Container>

                <ViewPrescriptiionImage
                    source={require('../../assets/MedicalImage.png')}
                />

                <TitleViewPrescriptiion>Dr. Claudio</TitleViewPrescriptiion>

                <ContainerViewPrescriptiion>

                    <SubtitleViewPrescription>Cliníco geral</SubtitleViewPrescription>
                    <SubtitleViewPrescription>CRM-15286</SubtitleViewPrescription>

                </ContainerViewPrescriptiion>

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    textLabel={'Descrição da consulta'}
                    keyType="text"
                />

                <BoxInputPrescriptionView
                    fieldWidth={100}
                    fieldHeight={53}
                    textLabel={'Diagnóstico do paciente'}
                    keyType="text"
                />

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    textLabel={'Prescrição médica'}
                    keyType="text"
                />

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    textLabel={'Exames médicos'}
                    keyType="text"
                    editable={false}
                />

                <ContainerViewPrescriptionButton>

                    <ButtonSendPrescription text={'Enviar'} />

                    <ButtonCanceled text={'Cancelar'}/>

                </ContainerViewPrescriptionButton>

                <Line></Line>

                <BoxInputViewPrescription
                    fieldWidth={100}
                    fieldHeight={121}
                    keyType="text"  
                    editable={false}
                />

                <LinkBack onPress={() => navigation.replace("Main")} >Voltar</LinkBack>

            </Container>

        </ScrollViewPrescriptiion>
    )
}