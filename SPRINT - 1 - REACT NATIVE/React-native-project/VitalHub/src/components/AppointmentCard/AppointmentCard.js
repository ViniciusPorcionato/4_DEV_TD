import { AntDesign } from '@expo/vector-icons';
import { ButtonCard, ButtonTextCard, ClockCard, ContainerCardList, ContentCard, DataProfileCard, ProfileData, ProfileImage, ProfileName, TextAge, TextBold, ViewRow } from './AppointmentCardStyles';

export const AppointmentCard = ({
    situacao = "pendente",
    onPressCancel,
    onPressAppointment
}) => {
    return (

        <ContainerCardList>

            <ProfileImage source={{ uri: "https://github.com/MateusPaladino-29.png" }} />

            <ContentCard>

                <DataProfileCard>

                    <ProfileName>Mateus Paladino</ProfileName>

                    <ProfileData>
                        <TextAge>17 anos</TextAge>
                        <TextBold>Rotina</TextBold>
                    </ProfileData>

                </DataProfileCard>

                <ViewRow>

                    <ClockCard situacao={situacao}>
                        <AntDesign name="clockcircle" size={14} color={situacao == "pendente" ? "#49B3BA" : "#8C8A97"} />
                        <TextBold situacao={situacao} color={"#49b3baq"}>14:00</TextBold>
                    </ClockCard>

                    {
                        situacao == "cancelado" ? (
                            <>
                            </>
                        ) : situacao == "pendente" ? (

                            <ButtonCard onPress={onPressCancel}>
                                <ButtonTextCard situacao={situacao}>Cancelar</ButtonTextCard>
                            </ButtonCard>
                        ) : (

                            <ButtonCard onPress={onPressAppointment}>
                                <ButtonTextCard situacao={situacao}>Ver prontuário</ButtonTextCard>
                            </ButtonCard>
                        )
                    }



                </ViewRow>


            </ContentCard>

        </ContainerCardList>

    )
}