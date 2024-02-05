import { useEffect, useState } from "react";
import { BoxInput } from "../../components/BoxInput/Index";
import { ContainerForm, ContainerInput, ScrollForm } from "./style";
import api from "../../services/services";
import { Alert } from "react-native";
import axios from "axios";

export function Home() {

    const [cep, setCep] = useState();
    const [logadouro, setLogadouro] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setcidade] = useState('');
    const [estado, setEstado] = useState('');
    const [uf, setUF] = useState('');


    useEffect(() => {

        async function getCep(){
            try {

                const promise = await api.get(`${cep}/json`)

                const estado = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}`)

                setLogadouro(promise.data.logradouro)
                setBairro(promise.data.bairro)
                setcidade(promise.data.localidade)
                setUF(promise.data.uf)
                setEstado(estado.data.nome)               

            } catch (error) {

                Alert("Deu ruim na API")
            }
        }
        getCep()

    },[cep])



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
                            placeholder='Estado...'
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