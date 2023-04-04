import { Badge, ListGroupItem } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onModal } from "../../redux/slices/modalShow";

export default function Task({ propTask, setTaskModal }) {
  const { nameTask, assigned, description } = propTask
  const dispatch = useDispatch()
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
  const handleClick = () => {
    dispatch(onModal())
    setTaskModal(propTask);
  };
  return (
    <ListGroupItem
      onClick={handleClick}
      className="d-flex justify-content-between align-items-start"
      as="li"
    >
      <div>
        <div className="fw-bold">{nameTask}</div>
        {description}
      </div>
      <Badge pill bg={colorAssigned(assigned)} as="span" className="ms-3">
        {assigned}
      </Badge>
    </ListGroupItem>
  );
}
