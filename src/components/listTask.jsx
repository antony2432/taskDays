import Task from "./task";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function ListTask() {
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
    <div className="mt-3 mb-3 card card-body d-flex flex-column justify-content-center align-items-center" style={styleCard}>
      <h3 className="text-center">List of Task</h3>

      {loading ? (
        <div className="spinner-border mt-3 text-primary">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="list-group mt-3">
          {tasks.map((task) => (
            <Task propTask={task} key={task.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
