import Image from "next/image";

import Hero from "../../public/assets/hero.png";

export default function Home() {
  return (
    <main className="bg-gray-950 flex flex-col justify-center items-center p-20 text-white h-screen">
      <Image src={Hero} alt="Imagem Home" className="max-h-96" />
      <h1 className="m-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-relaxed">
        Sistema feito para voce organizar <br />
        seus estudos e tarefas
      </h1>
      <div className="flex flex-col space space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 sm:flex-row">
        <section className="secction">
          <span>+ 12 posts</span>
        </section>
        <section className="secction">
          <span>+ 90 comentarios</span>
        </section>
      </div>
    </main>
  );
}
