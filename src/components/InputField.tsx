import React, { useRef } from "react";
import "./styles.css";

// ted types to props
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<EventTarget>) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Enter a Task"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

export default InputField;
