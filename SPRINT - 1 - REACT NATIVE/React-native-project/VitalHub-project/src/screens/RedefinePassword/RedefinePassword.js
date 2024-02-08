import { Container, ConteinerIcon } from "../../components/Container/ContainerStyle"
import { AntDesign } from '@expo/vector-icons';
import { Logo } from "../../components/Logo/LogoStyle";
import { ButtonTitle, Subtitle, Title } from "../../components/Title/TitleStyle";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/ButtonStyle";

export const RedefinePassword = () => {
    return (
        <Container>


            <ConteinerIcon>

                <AntDesign name="closecircle" size={30} color="#34898F" />

            </ConteinerIcon>

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Redefinir senha</Title>

            <Subtitle>Insira e confirme a sua nova senha</Subtitle>

            <Input
                placeholder={'Nova Senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
            // value={fieldValue}
            // onChangeText={onChangeText}
            />

            <Input
                placeholder={'Confirmar nova senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
            // value={fieldValue}
            // onChangeText={onChangeText}
            />

            <Button>
                <ButtonTitle>Confirmar nova senha</ButtonTitle>
            </Button>


        </Container>
    )
}