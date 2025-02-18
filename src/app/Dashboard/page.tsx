import TextArea from "@/components/TextArea";

export default function Dashboard() {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#1d4ed8"
                className="cursor-pointer"
              >
                <path d="M280-360v-240q0-33 23.5-56.5T360-680h326L583-783l57-57 200 200-200 200-57-56 103-104H360v240h-80Zm-80 240q-33 0-56.5-23.5T120-200v-600h80v600h480v-160h80v160q0 33-23.5 56.5T680-120H200Z" />
              </svg>
            </section>
            <section className="flex space-x-4 mx-4 my-2">
              <p className="w-11/12 text-lg">Minha primeira Tarefa</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#dc2626"
                className="cursor-pointer"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
