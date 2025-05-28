import Image from "next/image";
import Hero from "../../public/assets/hero.png";

import { collection, getCountFromServer } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

export default async function Home() {
  const tasksRef = collection(db, "tasks");
  const tasksSnap = await getCountFromServer(tasksRef);
  const totalTasks = tasksSnap.data().count;

  const commentsRef = collection(db, "comments");
  const commentsSnap = await getCountFromServer(commentsRef);
  const totalComments = commentsSnap.data().count;

  return (
    <main className="bg-gray-950 text-white">
      <div className="flex flex-col justify-center items-center h-screen">
        <Image src={Hero} alt="Imagem Home" className="max-h-96" />
        <h1 className="m-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-relaxed">
          Sistema feito para você organizar <br />
          seus estudos e tarefas
        </h1>

        <div className="flex flex-col space space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 sm:flex-row">
          <section className="secction">
            <span>+ {totalTasks} Tasks</span>
          </section>
          <section className="secction">
            <span>+ {totalComments} Comentários</span>
          </section>
        </div>
      </div>
    </main>
  );
}
