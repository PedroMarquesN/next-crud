import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "../core/Cliente";
import Botao from "@/components/Botao";
import {useState} from "react";
import Formulario from "@/components/Formulario";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    const clientes = [
        new Cliente('Pedro', 18 , "32"),
        new Cliente('Joao', 19, "34"),
        new Cliente('Carlos', 28, "35"),

    ]
    function clienteSelecionado(cliente:Cliente) {
        console.log(cliente.nome)

    }
    function clienteExcluido(cliente:Cliente) {
        console.log(cliente.nome)

    }

    function salvarCliente(cliente:Cliente) {
        console.log(cliente)

    }

    const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  return (
      <div className={`
      bg-gradient-to-r from-blue-500 to-purple-500 
      flex justify-center items-center h-screen
      text-white
      `}>
          <Layout titulo="Cadastro Simples">
              {visivel === 'tabela' ? (
                  <>
                      <div className={`flex justify-end`}>
                          <Botao
                              onClick={() => setVisivel('form')}
                              cor="green"
                              className="mb-4">Novo Cliente</Botao>
                      </div>

                      <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado}
                              clienteExcluido={clienteExcluido}/>

                  </>
              ):(
                  <Formulario

                      clienteMudou={salvarCliente}
                      cancelado={()=> setVisivel('tabela')}
                      cliente={clientes[2]}/>
              )}



          </Layout>
      </div>

  );
}
