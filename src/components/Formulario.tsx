import Entrada from "@/components/Entrada";
import Cliente from "@/core/Cliente";
import {useState} from "react";
import Botao from "@/components/Botao";


interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente:Cliente) => void
    cancelado?: () => void

}

export default function Formulario(props:FormularioProps) {
    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)


    return (
        <div>
            {id ? (
                <Entrada somenteLeitura texto="Código" valor={id} className="mb-4"/>
            ) : false}
            <Entrada  texto="Nome" valor={nome} valorMudou={setNome} className="mb-4"/>
            <Entrada tipo="number" texto="Idade" valor={idade} valorMudou={setIdade} />
            <div className={`flex justify-end mt-7`}>
                <Botao
                    onClick={()=> props.clienteMudou?.(new Cliente(nome,+idade,id))}
                    cor="blue"
                    className={`mr-2`}>
                    {id ? "Alterar" : "salvar"}
                </Botao>
                <Botao
                    onClick={props.cancelado}
                    cor='gray'>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}