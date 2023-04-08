import "./TaskItem.css";
import deleteIcon from "../../deleteIcon.png";

const TaskItem = (props) => {
  const deleteButtonClickHandler = (event) => {
    props.delete(props.id);
  };

  return (
    <div className="task-item">
      <label className="task-item__text">{props.text}</label>
      <input
        className="task-item__delete-button"
        type="image"
        src={deleteIcon}
        alt="Delete"
        onClick={deleteButtonClickHandler}
      />
    </div>
  );
};

export default TaskItem;
