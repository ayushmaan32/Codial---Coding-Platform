import { firestore } from "@/firebase/firebase";
import * as React from "react";
import { doc, setDoc } from "firebase/firestore";
export interface IAdminProps {}

export type formQuestion = {
  id: string;
  title: string;
  category: string;
  order: number;
  difficulty: string;
  videoId: string;
  likes: 0;
  dislikes: 0;
};

export default function Admin(props: IAdminProps) {
  const [inputs, setInputs] = React.useState<formQuestion>({
    id: "",
    title: "",
    category: "",
    order: 0,
    difficulty: "",
    videoId: "",
    likes: 0,
    dislikes: 0,
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  console.log(inputs);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const newFormData;
    await setDoc(doc(firestore, "problems", inputs.id), inputs);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleInput} name="id" placeholder="id" />
        <input
          type="text"
          onChange={handleInput}
          name="title"
          placeholder="title"
        />
        <input
          type="text"
          onChange={handleInput}
          name="difficulty"
          placeholder="difficulty"
        />
        <input
          type="text"
          onChange={handleInput}
          name="category"
          placeholder="category"
        />
        <input
          type="number"
          onChange={handleInput}
          name="order"
          placeholder="order"
        />
        <input
          type="text"
          onChange={handleInput}
          name="videoId"
          placeholder="videoId"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
