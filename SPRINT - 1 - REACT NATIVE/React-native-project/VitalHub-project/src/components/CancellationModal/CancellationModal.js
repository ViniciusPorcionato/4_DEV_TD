import { Button, Modal } from "react-native"
import { ButtonTitle, Title } from "../Title/TitleStyle"
import { LinkCode, LinkModal } from "../Links/Links"
import { ModalContent, ModalText, PatientModal } from "./CancellationModalStyle"
import { ButtonModal } from "../Button/ButtonStyle"

export const CancellationModal = ({
    visible,
    setShowModalCancel,
    ...rest
}) => {
    return(
        <Modal {...rest} visible={visible} transparent={true} animationType="fade">

            <PatientModal>

                <ModalContent>

                    <Title>Cancelar Consulta</Title>

                    <ModalText>Ao cancelar essa consulta, abrirá uma possível disponibilidade no seu horário, deseja mesmo cancelar essa consulta?</ModalText>

                    <ButtonModal>
                        <ButtonTitle>Confirmar</ButtonTitle>
                    </ButtonModal>

                    <LinkModal onPress={() => setShowModalCancel(false)}>Cancelar</LinkModal>

                </ModalContent>

            </PatientModal>

        </Modal>
    )
}