import Task from "../Task/Task";
import { Card, ListGroup, Spinner } from "react-bootstrap";
import useFireStorn from "../../hooks/useFireStorn";
export default function ListTask({ setTaskModal }) {
  const styleCard = {
    width: "23rem",
  };
  const {tasks, loading} = useFireStorn()
  return (
    <Card
      className="mt-3 mb-3 d-flex flex-column justify-content-center align-items-center"
      style={styleCard}
    >
      <Card.Title className="text-center mt-4">List of Task</Card.Title>

      {loading ? (
        <Spinner animation="border" variant="primary" className="mt-3 mb-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ListGroup as="ul" className="mt-3 mb-3">
          {tasks.length == 0
            ? "Crea tu primera tarea"
            : tasks.map((task) => (
                <Task
                  propTask={task}
                  key={task.id}
                  setTaskModal={setTaskModal}
                />
              ))}
        </ListGroup>
      )}
    </Card>
  );
}
