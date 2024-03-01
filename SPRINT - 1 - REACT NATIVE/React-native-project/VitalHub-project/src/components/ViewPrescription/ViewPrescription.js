import { BoxInputPrescriptionView, BoxInputViewPrescription } from "../BoxInput/BoxInput"
import { ButtonSendPrescription } from "../Button/Button"
import { Container, ContainerViewPrescriptiion, ScrollViewPrescriptiion } from "../Container/ContainerStyle"
import { ViewPrescriptiionImage } from "../Logo/LogoStyle"
import { SubtitleViewPrescriptiion, TitleViewPrescriptiion } from "../Title/TitleStyle"

export const ViewPrescription = () => {
    return (
        <ScrollViewPrescriptiion>

            <Container>

                <ViewPrescriptiionImage
                    source={require('../../assets/MedicalImage.png')}
                />

                <TitleViewPrescriptiion>Dr. Claudio</TitleViewPrescriptiion>

                <ContainerViewPrescriptiion>

                    <SubtitleViewPrescriptiion>Cliníco geral</SubtitleViewPrescriptiion>
                    <SubtitleViewPrescriptiion>CRM-15286</SubtitleViewPrescriptiion>

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
                />

                <ButtonSendPrescription text={'Enviar'}/>





            </Container>

        </ScrollViewPrescriptiion>
    )
}