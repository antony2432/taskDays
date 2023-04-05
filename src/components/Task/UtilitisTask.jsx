import { useDispatch } from "react-redux";
import { onModal } from "../../redux/slices/modalShow";
import { setTaskTarget } from "../../redux/slices/tasksSlice";

export default function UtilitisTask() {
  const dispatch = useDispatch();
  const colorAssigned = (assigned) => {
    let color = "";
    switch (assigned) {
      case "Antony":
        color = "warning";
        break;
      case "Valeria":
        color = "primary";
        break;
      case "Luis":
        color = "success";
        break;
      default:
        color = "secondary";
    }
    return color;
  };
  const handleClick = (task) => {
    dispatch(onModal());
    dispatch(setTaskTarget(task));
  };
  return {
    colorAssigned,
    handleClick,
  };
}
