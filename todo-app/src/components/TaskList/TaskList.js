import TaskItem from "./TaskItem";
import "./TaskList.css";

const TaskList = (props) => {
  if (props.items.length === 0) {
    return <p className="task-list__fallback">Found no expenses.</p>;
  }
  return (
    <div className="task-list">
      {props.items.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          text={task.text}
          delete={props.deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
