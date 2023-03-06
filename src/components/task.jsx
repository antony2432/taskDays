export default function Task({ propTask }) {
  const { nameTask, assigned, description } = propTask;
  const colorAssigned = (assigned) => {
    let color = "";
    switch (assigned) {
      case "Antony":
        color = "text-bg-warning";
        break;
      case "Valeria":
        color = "text-bg-primary";
        break;
      case "Luis":
        color = "text-bg-success";
        break;
      default:
        color = "text-bg-secondary";
    }
    return color;
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
    <div className="ms-2 me-auto">
      <div className="fw-bold">{nameTask}</div>
      {description}
    </div>
    <span className={`badge ${colorAssigned(assigned)} rounded-pill`}>
        {assigned}
    </span>
  </li>
  );
}
