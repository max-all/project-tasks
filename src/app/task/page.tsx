import Image from "next/image";
import TextArea from "@/components/TextArea";

export default function Task() {
  return (
    <main className="flex flex-col justify-center items-center max-w-screen-xl mx-auto space-y-10">
      {/* Task */}
      <article className="border border-neutral-400 rounded-lg w-full mt-10 p-4">
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
      </article>
      {/* Comment */}
      <section className="flex flex-col w-full space-y-4">
        <h1 className="text-lg font-bold">Deixar comentário</h1>
        <TextArea
          placeholder="Digite seu comentário"
          className="border border-neutral-400 rounded-lg p-4"
        />
        <button className="bg-blue-600 py-2 rounded-lg text-lg text-white disabled:bg-gray-600">
          Enviar comentário
        </button>
      </section>
      {/* Comments */}
      <article className="flex flex-col w-full space-y-4">
        <h1 className="text-lg font-bold">Todos comentários</h1>
        <div className="flex w-full items-center justify-between border border-neutral-400 rounded-lg">
          <p className="text-lg m-4">Teste</p>
          <Image
            src={"/assets/icons/delete.svg"}
            width={24}
            height={24}
            alt="icon delete"
            className="cursor-pointer"
          />
        </div>
      </article>
    </main>
  );
}
