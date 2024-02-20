import { useState } from "react"
import { CalendarHome } from "../../components/Calendar/Calendar"
import { Container } from "../../components/Container/ContainerStyle"
import { Header } from "../../components/Header/Header"
import { FilterAppointment } from "./MedicalConsultationsStyles"
import { BtnListAppointment } from "../../components/BtnListAppointment/BtnListAppointment"
import { ListComponent } from "../../components/List/ListStyles"
import { AppointmentCard } from "../../components/AppointmentCard/AppointmentCard"

export const MedicalConsultations = () => {

    const [statusLista, setStatusLista] = useState("pendente")

    const Consultas = [
        { id: 1, nome: "Vinicius", situacao: "pendente" },
        { id: 2, nome: "Vinicius", situacao: "realizado" },
        { id: 3, nome: "Vinicius", situacao: "cancelado" },
        { id: 4, nome: "Vinicius", situacao: "realizado" },
        { id: 5, nome: "Vinicius", situacao: "cancelado" }
    ];


    return (
        <Container>

            <Header />

            <CalendarHome />

            <FilterAppointment>

                {/* Agendadas */}
                <BtnListAppointment
                    textButton={"Agendadas"}
                    clickButton={statusLista === "pendente"}
                    onPress={() => setStatusLista("pendente")}
                />

                {/* Realizadas */}
                <BtnListAppointment
                    textButton={"Realizadas"}
                    clickButton={statusLista === "realizado"}
                    onPress={() => setStatusLista("realizado")}
                />

                {/* Canceladas */}
                <BtnListAppointment
                    textButton={"Canceladas"}
                    clickButton={statusLista === "cancelado"}
                    onPress={() => setStatusLista("cancelado")}
                />

            </FilterAppointment>


            {/* lista */}
            <ListComponent
            
                data={Consultas}
                keyExtractor={(item) => item.id}

                renderItem={
                    ({ item }) =>
                        statusLista == item.situacao && (
                            <AppointmentCard
                                situacao={item.situacao}
                            />
                        )
                }

            />


        </Container>
    )
}