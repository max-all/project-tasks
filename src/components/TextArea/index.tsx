import { HTMLProps } from "react";

export default function TextArea({ ...Props }: HTMLProps<HTMLTextAreaElement>) {
  return (
    <textarea
      className="w-full h-24 p-4 rounded-lg text-black text-lg"
      {...Props}
    ></textarea>
  );
}
