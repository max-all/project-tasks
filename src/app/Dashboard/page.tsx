import Image from "next/image";
import TextArea from "@/components/TextArea";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="bg-gray-950 text-white p-10">
        <form className="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4">
          <h1 className="text-3xl w-full m-2">Qual sua Tarefa?</h1>
          <TextArea />
          <section className="w-full m-2">
            <input type="checkbox" className="mr-2 cursor-pointer" />
            <label className="text-lg">Deixar tarefa publica</label>
          </section>
          <button
            type="submit"
            className="w-full bg-blue-600 py-2 m-4 rounded-sm text-lg"
          >
            Registrar
          </button>
        </form>
      </section>
      <section className="flex-grow">
        <div className="flex - flex-col justify-center items-center max-w-screen-xl mx-auto p-4">
          <h1 className="text-3xl m-2">Minhas Tarefas</h1>
          <article className="flex flex-col border border-neutral-400 rounded-sm w-full my-4">
            <section className="flex space-x-4 mx-4 my-2">
              <span className="bg-blue-700 text-white px-2 rounded-sm cursor-pointer">
                Publica
              </span>
              <Image
                src={"/assets/icons/share.svg"}
                width={20}
                height={20}
                alt="icon share"
              />
            </section>
            <section className="flex space-x-4 mx-4 my-2">
              <p className="w-11/12 text-lg">Minha primeira Tarefa</p>
              <Image
                src={"/assets/icons/delete.svg"}
                width={24}
                height={24}
                alt="icon delete"
              />
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
