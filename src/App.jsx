import TaskForm from "./components/taskForm"
import Task from "./components/task"
function App() {
  return (
    <div className="w-100  d-flex flex-column align-items-center">
      <h1 className="mb-3 mt-3">Task Day</h1>
      <TaskForm/>
      <Task/>
    </div>
  )
}

export default App
