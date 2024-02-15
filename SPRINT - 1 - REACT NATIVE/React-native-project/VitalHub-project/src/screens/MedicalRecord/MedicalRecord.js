import { Container, ScrollProfile } from "../../components/Container/ContainerStyle"
import { UserImage } from "../../components/Logo/LogoStyle"
import { SubtitleProfile, TitleProfile } from "../../components/Title/TitleStyle"

export const MedicalRecord = () => {
    return (
        <ScrollProfile>

            <Container>

                <UserImage
                    source={require('../../assets/ProfileImage.png')}
                />

                <TitleProfile>Richard Kosta</TitleProfile>

                <SubtitleProfile>richard.kosta@gmail.com</SubtitleProfile>

                

            </Container>

        </ScrollProfile>
    )
}