import { BabyBlueButtonText } from "../Title/TitleStyle";
import { SmallButton } from "./ButtonStyle";

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