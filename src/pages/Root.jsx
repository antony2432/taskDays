import TaskForm from "../components/TaskForm";
import ListTask from "../components/ListTask";
import ModalForm from "../components/Modal";
import "../firebase";

export default function Root() {
  return (
    <div className="w-100  d-flex flex-column align-items-center">
      <h1 className="mb-3 mt-3">Task Day</h1>
      <TaskForm />
      <ListTask />
      <ModalForm />
    </div>
  );
}
