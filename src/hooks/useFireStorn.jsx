import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTask } from "../redux/slices/tasksSlice";
const useFireStorn = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const tasks = useSelector((state) => state.tasksSlice.tasks);

  const getTask = async () => {
    onSnapshot(collection(db, "task"), (querySnapshot) => {
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });
      dispatch(setTask(arr));
      setLoading(false);
    });
  };
  const postTask = async (data) => {
    try {
      await addDoc(collection(db, "task"), data);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTask = async (task) => {
    try {
      updateDoc(doc(db, "task", task.id), task);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      deleteDoc(doc(db, "task", id));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setLoading(true);
    getTask();
  }, []);

  return {
    tasks,
    loading,
    postTask,
    updateTask,
    deleteTask,
  };
};
export default useFireStorn;
