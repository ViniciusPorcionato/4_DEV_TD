import { BoxInput } from "../../components/BoxInput/Index";
import { ContainerForm, ScrollForm } from "./style";

export function Home(){
    return(
        <>
            <ScrollForm>
                <ContainerForm>
                    <BoxInput
                    textLabel='Informar CEP'
                    placeholder='CEP...'
                    keyType='numeric'
                    maxLength={9}
                    editable={true}

                    />
                    <BoxInput
                    textLabel='Logradouro'
                    placeholder='Logradouro...'
                    keyType='text'
                    maxLength={9}
                    />

                </ContainerForm>
            </ScrollForm>
        </>
    )
}