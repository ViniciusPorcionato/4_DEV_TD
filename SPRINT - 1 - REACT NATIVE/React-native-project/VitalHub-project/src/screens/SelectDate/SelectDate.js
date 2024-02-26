import { StatusBar } from "react-native"
import { Container } from "../../components/Container/ContainerStyle"
import CalendarComponent from "../../components/CalendarComponent/CalendarComponent"
import InputSelect from "../../components/InputSelect/InputSelect"
import { Button } from "../../components/Button/ButtonStyle"
import { ButtonTitle, TitleSelect } from "../../components/Title/TitleStyle"
import { LinkCodeModal } from "../../components/Links/Links"


export const SelectDate = () => {
    return (
        <Container>

            <StatusBar translucent backgroundColor="transparent" barStyle='dark-content' />

            <TitleSelect>Selecionar Data</TitleSelect>

            <CalendarComponent />

            <InputSelect />

            <Button>
                <ButtonTitle>Continuar</ButtonTitle>
            </Button>

            <LinkCodeModal onPress={() => setShowModalAppointment(false)}>Cancelar</LinkCodeModal>

        </Container>
    )
}