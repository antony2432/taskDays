import { Badge, ListGroupItem } from "react-bootstrap";
import UtilitisTask from "./UtilitisTask";

export default function Task({ propTask }) {
  const { nameTask, assigned, description } = propTask;
  const { colorAssigned, handleClick } = UtilitisTask();
  return (
    <ListGroupItem
      onClick={() => handleClick(propTask)}
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
