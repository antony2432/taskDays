import TaskForm from "./components/TaskForm/TaskForm";
import ListTask from "./components/ListTask/ListTask";
import "./firebase";
import ModalForm from "./components/Modal/ModalForm";
function App() {
  return (
    <div className="w-100  d-flex flex-column align-items-center">
      <h1 className="mb-3 mt-3">Task Day</h1>
      <TaskForm />
      <ListTask />
      <ModalForm />
    </div>
  );
}

export default App;
