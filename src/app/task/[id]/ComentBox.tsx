"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";
import TextArea from "@/components/TextArea";
import { useSession } from "next-auth/react";

type Props = {
  taskId: string;
};

export default function CommentBox({ taskId }: Props) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!comment.trim()) return;
    setLoading(true);

    try {
      await addDoc(collection(db, "comments"), {
        content: comment,
        createdAt: new Date(),
        name: session?.user?.name ?? "Anônimo",
        taskId: taskId,
      });

      setComment("");
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
    }

    setLoading(false);
  }

  return (
    <section>
      <h2 className="text-lg mb-4">Deixe um comentário</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <TextArea
          placeholder="Digite seu comentário..."
          value={comment}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
            setComment(event.target.value)
          }
        />
        <button
          type="submit"
          className="w-full bg-blue-600 py-2 rounded-lg text-lg disabled:bg-gray-600 text-white"
          disabled={!comment.trim() || loading}
        >
          {loading ? "Enviando..." : "Enviar comentário"}
        </button>
      </form>
    </section>
  );
}
