import { Container } from "../../components/Container/ContainerStyle"
import { Logo } from "../../components/Logo/LogoStyle"
import { Title } from "../../components/Title/TitleStyle"
import { Input } from "../../components/Input/Input"

export const Login = () => {
    return(
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
            // value={fieldValue}
            // onChangeText={onChangeText}
            />

            {/* <LinkMedium>Esqueceu sua senha?</LinkMedium>

            <Button>
                <ButtonTitle>Entrar</ButtonTitle>
            </Button>

            <ButtonGoogle>
                <ButtonTitleGoogle>Entrar com o Google</ButtonTitleGoogle>
            </ButtonGoogle>

            <ContentAccount>
                <TextAccount>Não tem conta ? Crie uma conta agora</TextAccount>
            </ContentAccount> */}

        </Container>
    )
}