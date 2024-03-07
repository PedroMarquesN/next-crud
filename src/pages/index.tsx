import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div className={`
      bg-gradient-to-r from-blue-500 to-purple-500 
      flex justify-center items-center h-screen
      text-white
      `}>
          <Layout titulo="Cadastro Simples">
              <span>Conteudo</span>
          </Layout>
      </div>

  );
}
