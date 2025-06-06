import {
  doc,
  getDoc,
  collection,
  where,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import CommentBox from "../../../components/ComentBox";
import CommentList from "../../../components/CommentList";

type CommentType = {
  id: string;
  content: string;
  name?: string;
  taskId: string;
  createdAt: Date;
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function TaskPage({ params }: PageProps) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const currentUserName = session?.user?.name;

  const docRef = doc(db, "tasks", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    notFound();
  }

  const task = docSnap.data();

  if (!task?.taskPublic) {
    notFound();
  }

  const commentsRef = collection(db, "comments");
  const q = query(commentsRef, where("taskId", "==", id));
  const querySnapshot = await getDocs(q);

  const comments: CommentType[] = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      content: data.content,
      name: data.name,
      taskId: data.taskId,
      createdAt: data.createdAt.toDate(),
    };
  });

  return (
    <main className="flex flex-col space-y-16 min-h-[90%] p-10 max-w-7xl mx-auto">
      <article className="border rounded-lg border-gray-400 px-6 py-4">
        <p className="text-lg whitespace-pre-wrap">{task.task}</p>
        <div className="flex justify-between">
          <p className="mt-4 text-sm text-gray-600">Criada por: {task.user}</p>
          <p className="mt-4 text-sm text-gray-600">
            {task.createdAt?.toDate().toLocaleDateString("pt-BR")}
          </p>
        </div>
      </article>

      <CommentBox taskId={id} />

      <CommentList
        comments={comments}
        currentUserName={currentUserName || "Anônimo"}
        taskOwnerName={task.user}
      />
    </main>
  );
}
