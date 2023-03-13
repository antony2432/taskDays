import TaskForm from "./components/TaskForm/TaskForm";
import ListTask from "./components/ListTask/ListTask";
import { useState } from "react";
import "./firebase";
import ModalForm from "./components/Modal/modal";
function App() {
  const [show, setShow] = useState(false);
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
      <ListTask setShow={setShow} setTaskModal={setTaskModal} />
      <ModalForm
        show={show}
        setShow={setShow}
        taskModal={taskModal}
        setTaskModal={setTaskModal}
      />
    </div>
  );
}

export default App;
