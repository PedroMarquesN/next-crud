import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "../core/Cliente";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

    const clientes = [
        new Cliente('Pedro', 18 , "32"),
        new Cliente('Joao', 19, "34"),
        new Cliente('Carlos', 28, "35"),

    ]
  return (
      <div className={`
      bg-gradient-to-r from-blue-500 to-purple-500 
      flex justify-center items-center h-screen
      text-white
      `}>
          <Layout titulo="Cadastro Simples">
              <Tabela clientes={clientes}/>
          </Layout>
      </div>

  );
}
