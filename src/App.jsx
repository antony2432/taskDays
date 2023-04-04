import TaskForm from "./components/TaskForm/TaskForm";
import ListTask from "./components/ListTask/ListTask";
import { useState } from "react";
import "./firebase";
import ModalForm from "./components/Modal/ModalForm";
function App() {
  const initialTaskModal = {
    assigned: "",
    nameTask: "",
    description: "",
    id: "",
  };
  const [taskModal, setTaskModal] = useState(initialTaskModal);
  return (
    <div className="w-100  d-flex flex-column align-items-center">
      <h1 className="mb-3 mt-3">Task Day</h1>
      <TaskForm />
      <ListTask setTaskModal={setTaskModal} />
      <ModalForm
        taskModal={taskModal}
        setTaskModal={setTaskModal}
      />
    </div>
  );
}

export default App;
