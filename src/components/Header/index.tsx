import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center px-10 py-4 bg-black">
      <section className="flex justify-between items-center min-w-full">
        <nav className="flex items-center space-x-2">
          <Link href="/">
            <h1 className="flex justify-center items-center text-white text-lg">
              Tarefas<span className="text-red-600 text-2xl ml-1">+</span>
            </h1>
          </Link>
          <Link href={"/Dashboard"}>
            <button className="bg-white text-black px-4 rounded-sm text-sm">
              Meu Painel
            </button>
          </Link>
        </nav>
        <h2 className="flex justify-center items-center text-white w-28 border rounded-full">
          Ola Max
        </h2>
      </section>
    </header>
  );
}
