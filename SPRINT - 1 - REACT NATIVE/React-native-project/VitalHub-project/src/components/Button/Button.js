import { BabyBlueButtonText, ButtonSendText } from "../Title/TitleStyle";
import { ButtonSend, SmallButton } from "./ButtonStyle";
import { MaterialIcons } from '@expo/vector-icons';

export const SmallButtonModal = ({
    onPress,
    text
}) => {
    return (
        <SmallButton
            onPress={onPress}>
                <BabyBlueButtonText>{text}</BabyBlueButtonText>
        </SmallButton>
    );
}

export const ButtonSendPrescription = ({
    onPress,
    text
}) => {
    return (
        <ButtonSend
            onPress={onPress}>
                <MaterialIcons name="add-a-photo" size={24} color="white" />
                <ButtonSendText>{text}</ButtonSendText>
        </ButtonSend>
    );
}