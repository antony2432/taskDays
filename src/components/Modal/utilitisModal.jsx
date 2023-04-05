import { useSelector, useDispatch } from "react-redux";
import { offModal } from "../../redux/slices/modalShow";
import { setTaskTarget } from "../../redux/slices/tasksSlice";
import useFireStorn from "../../hooks/useFireStorn";

export default function UtilitisModal() {
  const { deleteTask, updateTask } = useFireStorn();
  const show = useSelector((state) => state.modalShow.value);
  const task = useSelector((state) => state.tasksSlice.taskTarget);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(offModal());

  const onChangeValue = (e) => {
    const { id, value } = e.target;
    dispatch(setTaskTarget({ ...task, [id]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      dispatch(offModal());
      updateTask(task);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      deleteTask(task.id);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(offModal());
    }
  };

  return { task, show, handleClose, onChangeValue, handleUpdate, handleDelete };
}
