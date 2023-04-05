import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FloatingLabel,
} from "react-bootstrap";
import UtilitisModal from "./utilitisModal";

export default function ModalForm() {
  const { task, show, handleClose, onChangeValue, handleUpdate, handleDelete } =
    UtilitisModal();
  return (
    <Modal show={show} onHide={handleClose} size="sm" centered>
      <ModalHeader closeButton>
        <ModalTitle>Actualizar Tarea</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="mb-3">
            <FormLabel>Tarea</FormLabel>
            <FormControl
              type="text"
              id="nameTask"
              onChange={onChangeValue}
              value={task.nameTask}
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <FormLabel>Asignado</FormLabel>
            <FormControl
              type="text"
              id="assigned"
              onChange={onChangeValue}
              value={task.assigned}
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
                value={task.description}
              />
            </FloatingLabel>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleUpdate}>Actualizar</Button>
        <Button onClick={handleDelete} variant="danger">
          Eliminar
        </Button>
      </ModalFooter>
    </Modal>
  );
}
