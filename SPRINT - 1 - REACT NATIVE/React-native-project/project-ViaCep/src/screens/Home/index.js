import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput/Index";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import api from "../../services/services";
import { Alert } from "react-native";

export function Home() {

    const [cep, setCep] = useState();
    const [logadouro, setLogadouro] = useState('');
    const [bairro, setBairro] = useState('Parque São Rafael');
    const [cidade, setcidade] = useState('São Paulo');
    const [estado, setEstado] = useState('São Paulo');
    const [uf, setUF] = useState('SP');


    useEffect(() => {

        async function getCep(){
            try {
                const promise = await api.get("")

                setAddress(promise.data)    

            } catch (error) {

                Alert("Deu ruim na API")
            }
        }
    })

    return (
        <>
            <ScrollForm>
                <ContainerForm>

                    <BoxInput
                        textLabel='Informar CEP'
                        placeholder='CEP...'
                        keyType='numeric'
                        maxLength={9}
                        editable={true}
                        fieldValue={cep}
                        onChangeText={e => setCep(e)}

                    />

                    <BoxInput
                        textLabel='Logradouro'
                        placeholder='Logradouro...'
                        keyType='text'
                        fieldValue={logadouro}
                    />

                    <BoxInput
                        textLabel='Bairro'
                        placeholder='Bairro...'
                        keyType='text'
                        fieldValue={bairro}
                    />

                    <BoxInput
                        textLabel='Cidade'
                        placeholder='Cidade...'
                        keyType='text'
                        fieldValue={cidade}
                    />

                    <ContainerInput>

                        <BoxInput
                            textLabel='Estado'
                            placeholder='Logadouro...'
                            keyType='text'
                            fieldWidth={60}
                            fieldValue={estado}
                        />

                        <BoxInput
                            textLabel='UF'
                            placeholder='UF...'
                            keyType='text'
                            fieldWidth={30}
                            fieldValue={uf}
                        />

                    </ContainerInput>

                </ContainerForm>
            </ScrollForm>
        </>
    )
}