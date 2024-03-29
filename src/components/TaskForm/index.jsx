import {
  Button,
  Card,
  FloatingLabel,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import UtilitisTaskForm from "./UtilitisTaskForm";

export default function TaskForm() {
  const { dataForm, onChangeValue, styleCard, handleClick } =
    UtilitisTaskForm();
  return (
    <Card style={styleCard}>
      <Card.Body>
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Tarea</FormLabel>
            <FormControl
              type="text"
              id="nameTask"
              onChange={onChangeValue}
              value={dataForm.nameTask}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Asignado</FormLabel>
            <FormControl
              type="text"
              id="assigned"
              onChange={onChangeValue}
              value={dataForm.assigned}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Descripción</FormLabel>
            <FloatingLabel>
              <FormControl
                as="textarea"
                style={{ height: "100px" }}
                id="description"
                onChange={onChangeValue}
                value={dataForm.description}
              />
            </FloatingLabel>
          </FormGroup>
          <Button className="w-100" onClick={handleClick}>
            Enviar
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
