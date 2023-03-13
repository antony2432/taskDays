import Task from "../Task/Task";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Card, ListGroup, Spinner } from "react-bootstrap";

export default function ListTask({ setShow, setTaskModal }) {
  const styleCard = {
    width: "23rem",
  };

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTask = async () => {
    onSnapshot(collection(db, "task"), (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      setTasks(arr);
      setLoading(false);
    });
  };
  useEffect(() => {
    setLoading(true);
    getTask();
  }, []);
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
                  setShow={setShow}
                  setTaskModal={setTaskModal}
                />
              ))}
        </ListGroup>
      )}
    </Card>
  );
}
