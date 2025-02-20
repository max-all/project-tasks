"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import TextArea from "@/components/TextArea";
import { Tasks } from "@/types/Tasks";

import { db } from "@/services/firebaseConnection";
import {
  addDoc,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
} from "firebase/firestore";

export default function Dashboard() {
  const { status, data } = useSession();
  const router = useRouter();

  const [task, setTask] = useState("");
  const [taskPublic, setTaskPublic] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    } else {
      async function loadTasks() {
        const taskRef = collection(db, "tasks");
        const q = query(
          taskRef,
          orderBy("createdAt", "desc"),
          where("user", "==", data?.user?.name)
        );

        onSnapshot(q, (snapshot) => {
          let list = [] as Tasks[];

          snapshot.forEach((doc) => {
            list.push({
              id: doc.id,
              task: doc.data().task,
              taskPublic: doc.data().taskPublic,
              createdAt: doc.data().createdAt,
              user: doc.data().user,
            });
          });

          setTasks(list);
        });
      }

      loadTasks();
    }
  }, [status, router, data?.user?.name]);

  useEffect(() => {
    if (task !== "" || null) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [task]);

  async function handleTaskRegister(event: FormEvent) {
    event.preventDefault();

    try {
      await addDoc(collection(db, "tasks"), {
        task: task,
        taskPublic: taskPublic,
        createdAt: new Date(),
        user: data?.user?.name,
      });

      setTask("");
      setTaskPublic(false);
    } catch (error) {
      console.log(error);
    }
  }

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (status === "authenticated") {
    return (
      <main className="min-h-screen flex flex-col">
        {/* Section para Adicionar nova tarefa */}
        <section className="bg-gray-950 text-white p-10">
          <form
            onSubmit={handleTaskRegister}
            className="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4"
          >
            <h1 className="text-3xl w-full m-2">Qual sua Tarefa?</h1>
            <TextArea
              placeholder="Digite sua Tarefa"
              value={task}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setTask(event.target.value)
              }
            />
            <section className="w-full m-2">
              <input
                type="checkbox"
                className="mr-2 cursor-pointer"
                checked={taskPublic}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setTaskPublic(event.target.checked)
                }
              />
              <label className="text-lg">Deixar tarefa publica</label>
            </section>
            <button
              type="submit"
              disabled={buttonDisable}
              className="w-full bg-blue-600 py-2 m-4 rounded-sm text-lg disabled:bg-gray-600"
            >
              Registrar
            </button>
          </form>
        </section>
        {/* Section para Listagem de tarefas */}
        <section className="flex-grow">
          <div className="flex - flex-col justify-center items-center max-w-screen-xl mx-auto p-4">
            <h1 className="text-3xl m-2">Minhas Tarefas</h1>
            <article className="flex flex-col border border-neutral-400 rounded-sm w-full my-4">
              {/* Section caso a tarefa seja publicas */}
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
              {/* Section referente a tarefa */}
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
}
