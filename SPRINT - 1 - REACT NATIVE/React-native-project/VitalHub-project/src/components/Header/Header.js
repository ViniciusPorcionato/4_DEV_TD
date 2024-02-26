import { ContainerHeader } from "../Container/ContainerStyle"
import { Ionicons } from '@expo/vector-icons';
import { BoxUser, DataUser, ImageUser, NameUser, TextDefault } from "./HomeStyles"

export const Header = () => {
    return (

        <ContainerHeader>

            <BoxUser>

                <ImageUser
                    source={require('../../assets/unsplash_3HIroMoyre8.png')}
                />

                <DataUser>
                    <TextDefault>Bem Vindo !</TextDefault>
                    <NameUser>Dr. Fulano</NameUser>
                </DataUser>

            </BoxUser>

            <Ionicons name="notifications" size={25} color="#fbfbfb" />

        </ContainerHeader>

    )
}