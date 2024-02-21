import { Modal } from "react-native"
import { ImageModalAppointment, ModalContentAppointment, PatientModalAppointment } from "./AppointmentModalStyle"
import { ButtonTitle, SubtitleMedicalRecord, TitleModalAppointment } from "../Title/TitleStyle"
import { ContainerMedicalRecord } from "../Container/ContainerStyle"
import { LinkModal } from "../Links/Links"
import { ButtonModalAppointment } from "../Button/ButtonStyle"

export const AppointmentModal = ({
    visible,
    setShowModalAppointment,
    ...rest
}) => {
    return (
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModalAppointment>

                <ModalContentAppointment>

                    <ImageModalAppointment source={require('../../assets/ProfileImage.png')} />

                    <TitleModalAppointment>Nicole Sarga</TitleModalAppointment>

                    <ContainerMedicalRecord>

                        <SubtitleMedicalRecord>22 anos</SubtitleMedicalRecord>

                        <SubtitleMedicalRecord>richard.kosta@gmail.com</SubtitleMedicalRecord>


                    </ContainerMedicalRecord>


                    <ButtonModalAppointment>
                        <ButtonTitle>Inserir Prontuário</ButtonTitle>
                    </ButtonModalAppointment>


                    <LinkModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkModal>



                </ModalContentAppointment>

            </PatientModalAppointment>


        </Modal>
    )
}