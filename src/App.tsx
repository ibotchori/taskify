import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
const App: React.FC = () => {
  // State with type string
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField />
    </div>
  );
};

export default App;
