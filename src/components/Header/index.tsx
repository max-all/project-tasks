"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
  const { data: session, status } = useSession();

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

        {status === "loading" ? (
          <></>
        ) : session ? (
          <button
            className="bg-white text-black p-sm min-w-24 max-w-sm rounded-full"
            onClick={() => signOut()}
          >
            Olá {session.user?.name}
          </button>
        ) : (
          <button
            className="bg-white text-black p-sm min-w-24 max-w-sm rounded-full"
            onClick={() => signIn("github")}
          >
            Acessar
          </button>
        )}
      </section>
    </header>
  );
}
