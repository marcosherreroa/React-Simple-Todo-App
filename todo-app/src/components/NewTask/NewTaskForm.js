import { useState } from "react";

import "./NewTaskForm.css";

const NewTaskForm = (props) => {
  const [nextId, setNextId] = useState(4);
  const [taskText, setTaskText] = useState("");

  const enterTextHandler = (event) => {
    setTaskText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.newTask({ id: nextId, text: taskText });
    setNextId((prev) => prev + 1);
    setTaskText("");
  };

  return (
    <form className="new-task-form" onSubmit={submitHandler}>
      <p>Task Title</p>
      <input
        className="new-task-form__input"
        type="text"
        value={taskText}
        onChange={enterTextHandler}
      />
      <button className="new-task-form__button" type="submit">
        Add task
      </button>
    </form>
  );
};

export default NewTaskForm;
