"use client";

import { useState } from "react";
import Image from "next/image";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/services/firebaseConnection";

type Comment = {
  id: string;
  content: string;
  name?: string;
};

type Props = {
  comments: Comment[];
  currentUserName?: string;
  taskOwnerName: string;
};

export default function CommentList({
  comments,
  currentUserName,
  taskOwnerName,
}: Props) {
  const [localComments, setLocalComments] = useState(comments);

  async function handleDelete(commentId: string) {
    try {
      await deleteDoc(doc(db, "comments", commentId));
      setLocalComments((prev) => prev.filter((c) => c.id !== commentId));
    } catch (error) {
      console.error("Erro ao deletar comentário:", error);
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Comentários:</h3>
      {localComments.length === 0 ? (
        <p className="text-gray-500">Nenhum comentário ainda.</p>
      ) : (
        localComments.map((comment) => (
          <div key={comment.id} className="border p-3 rounded-md">
            <div className="flex justify-between">
              <p className="whitespace-pre-wrap">{comment.content}</p>

              {(comment.name === currentUserName ||
                (!comment.name && taskOwnerName === currentUserName)) && (
                <Image
                  src="/assets/icons/delete.svg"
                  width={24}
                  height={24}
                  alt="Deletar"
                  className="cursor-pointer"
                  onClick={() => handleDelete(comment.id)}
                />
              )}
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Por: {comment.name ?? "Anônimo"}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
