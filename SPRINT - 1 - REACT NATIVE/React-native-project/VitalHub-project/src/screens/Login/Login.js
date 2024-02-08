import { Container, ContentAccount } from "../../components/Container/ContainerStyle"
import { Logo } from "../../components/Logo/LogoStyle"
import { ButtonTitle, ButtonTitleGoogle, TextAccount, Title } from "../../components/Title/TitleStyle"
import { Input } from "../../components/Input/Input"
import { LinkAccount, LinkMedium } from "../../components/Links/Links"
import { Button, ButtonGoogle } from "../../components/Button/ButtonStyle"
import { AntDesign } from '@expo/vector-icons';

export const Login = () => {
    return (
        <Container>

            <Logo
                source={require('../../assets/VitalHub_Logo.png')}
            />

            <Title>Entrar ou criar conta</Title>

            <Input
                placeholder={'Usuário ou E-mail'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
            // value={fieldValue}
            // onChangeText={onChangeText}
            />

            <Input
                placeholder={'Senha'}
                keyboardType={'text'}
                placeholderTextColor={'#34898F'}
                secureTextEntry={true}
            // value={fieldValue}
            // onChangeText={onChangeText}
            />


                <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <AntDesign name="google" size={18} color="#496BBA" />
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta ?</TextAccount>
                <LinkAccount>Crie uma conta agora!</LinkAccount>
            </ContentAccount>

        </Container>
    )
}