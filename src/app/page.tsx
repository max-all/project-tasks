import Header from "@/components/Header";
import Image from "next/image";

import Hero from "../../public/assets/hero.png";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <div className="bg-gray-950 flex flex-col justify-center items-center p-20 text-white h-screen">
        <Image src={Hero} alt="Imagem Home" className="max-h-96" />
        <h1 className="m-10 text-center text-2xl leading-relaxed">
          Sistema feito para voce organizar <br />
          seus estudos e tarefas
        </h1>
        <div className="flex flex-row space space-x-4">
          <section className="secction">
            <span>+ 12 posts</span>
          </section>
          <section className="secction">
            <span>+ 90 comentarios</span>
          </section>
        </div>
      </div>
    </main>
  );
}
